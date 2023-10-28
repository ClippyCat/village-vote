mod db;

use std::{net::SocketAddr, sync::Arc};

use axum::{http::StatusCode, response::IntoResponse, routing::get, Router};

use chrono::NaiveDate;
use serde::{ser::SerializeStruct, Serialize};
use sqlx::{Pool, Sqlite};

mod model;

use model::{TimeZone, HHMM};

enum OptionKind {
    Text(String),
    Time {
        date: NaiveDate,
        time: HHMM,
        // length in minutes
        length: u16,
        timezone: TimeZone,
        calendar: bool,
    },
}

impl Serialize for OptionKind {
    fn serialize<S>(&self, serializer: S) -> Result<S::Ok, S::Error>
    where
        S: serde::Serializer,
    {
        match self {
            OptionKind::Text(text) => serializer.serialize_str(text),
            OptionKind::Time {
                date,
                time,
                length,
                timezone,
                calendar,
            } => {
                let mut s = serializer.serialize_struct("Time", 5)?;
                s.serialize_field("date", date)?;
                s.serialize_field("time", time)?;
                s.serialize_field("length", length)?;
                s.serialize_field("timezone", timezone)?;
                s.serialize_field("calendar", calendar)?;
                s.end()
            }
        }
    }
}

#[derive(Serialize)]
#[serde(tag = "type", content = "options")]
#[serde(rename_all = "camelCase")]
enum Options {
    SingleSelect(Vec<OptionKind>),
    MultiSelect(Vec<OptionKind>),
    // Rank,
}

#[derive(Serialize)]
struct Question {
    text: String,
    options: Options,
}

#[derive(Serialize)]
struct Data {
    title: String,
    questions: Vec<Question>,
}

impl Default for Data {
    fn default() -> Self {
        // const data = {
        //     title: "test",
        //     questions: [
        //       {
        //         text: "q1",
        //         options: ["a1", "a2"],
        //         type: "singleSelect",
        //       },
        //       {
        //         text: "q2",
        //         options: [
        //           {
        //             date: "2023-10-25",
        //             time: "00:00",
        //             length: "30",
        //             timezone: "America/Edmonton",
        //             calendar: true,
        //           },
        //           {
        //             date: "2024-02-29",
        //             time: "18:09",
        //             length: "420",
        //             timezone: "America/Edmonton",
        //             calendar: true,
        //           },
        //         ],
        //         type: "singleSelect",
        //       },
        //       {
        //         text: "q3",
        //         options: ["a1", "a2"],
        //         type: "multiSelect",
        //       },
        //       {
        //         text: "q4",
        //         options: [
        //           {
        //             date: "2030-11-11",
        //             time: "23:00",
        //             length: "55",
        //             timezone: "America/Edmonton",
        //             calendar: true,
        //           },
        //           {
        //             date: "2024-02-29",
        //             time: "18:09",
        //             length: "420",
        //             timezone: "America/Edmonton",
        //             calendar: true,
        //           },
        //         ],
        //         type: "multiSelect",
        //       },
        //     ],
        //   };

        let q1 = Question {
            text: "q1".to_string(),
            options: Options::SingleSelect(vec![
                OptionKind::Text("a1".to_string()),
                OptionKind::Text("a2".to_string()),
            ]),
        };

        let q2 = Question {
            text: "q2".to_string(),
            options: Options::SingleSelect(vec![
                OptionKind::Time {
                    date: NaiveDate::from_ymd_opt(2023, 10, 25).unwrap(),
                    time: HHMM { hh: 0, mm: 0 },
                    length: 30,
                    timezone: TimeZone::AmericaEdmonton,
                    calendar: true,
                },
                OptionKind::Time {
                    date: NaiveDate::from_ymd_opt(2024, 2, 29).unwrap(),
                    time: HHMM { hh: 18, mm: 9 },
                    length: 420,
                    timezone: TimeZone::AmericaEdmonton,
                    calendar: true,
                },
            ]),
        };

        let q3 = Question {
            text: "q3".to_string(),
            options: Options::MultiSelect(vec![
                OptionKind::Text("a1".to_string()),
                OptionKind::Text("a2".to_string()),
            ]),
        };

        let q4 = Question {
            text: "q4".to_string(),
            options: Options::MultiSelect(vec![
                OptionKind::Time {
                    date: NaiveDate::from_ymd_opt(2030, 11, 11).unwrap(),
                    time: HHMM { hh: 23, mm: 0 },
                    length: 55,
                    timezone: TimeZone::AmericaEdmonton,
                    calendar: true,
                },
                OptionKind::Time {
                    date: NaiveDate::from_ymd_opt(2024, 2, 29).unwrap(),
                    time: HHMM { hh: 18, mm: 9 },
                    length: 420,
                    timezone: TimeZone::AmericaEdmonton,
                    calendar: true,
                },
            ]),
        };

        Self {
            title: "Untitled".to_string(),
            questions: vec![q1, q2, q3, q4],
        }
    }
}

#[derive(Clone)]
pub struct ServerState {
    db_pool: Arc<Pool<Sqlite>>,
}

#[tokio::main]
async fn main() -> Result<(), Box<dyn std::error::Error>> {
    let pool = db::connect().await;
    let state = ServerState {
        db_pool: Arc::new(pool),
    };
    let router = Router::new()
        .route("/", get(index))
        .route(
            "/default_data",
            get(|| async {
                let data = Data::default();
                serde_json::to_string_pretty(&data).unwrap()
            }),
        )
        .with_state(state);
    let addr = SocketAddr::from(([127, 0, 0, 1], 8000));
    println!("Listening on {addr}");
    axum::Server::bind(&addr)
        .serve(router.into_make_service())
        .await
        .unwrap();
    Ok(())
}

async fn index() -> impl IntoResponse {
    (StatusCode::OK, "Hello :)".to_string())
}

#[cfg(test)]
mod tests {
    #[test]
    fn print_default_data() {
        let data = super::Data::default();
        println!("{}", serde_json::to_string_pretty(&data).unwrap());
    }
}
