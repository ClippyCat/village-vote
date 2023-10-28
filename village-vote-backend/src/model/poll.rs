use chrono::NaiveDate;
use serde::Serialize;

use super::{OptionType, Options, Question, TimeZone, HHMM};

#[derive(Serialize)]
pub(crate) struct Poll {
    pub(crate) title: String,
    pub(crate) questions: Vec<Question>,
}

impl Default for Poll {
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
                OptionType::Text("a1".to_string()),
                OptionType::Text("a2".to_string()),
            ]),
        };

        let q2 = Question {
            text: "q2".to_string(),
            options: Options::SingleSelect(vec![
                OptionType::Time {
                    date: NaiveDate::from_ymd_opt(2023, 10, 25).unwrap(),
                    time: HHMM { hh: 0, mm: 0 },
                    length: 30,
                    timezone: TimeZone::AmericaEdmonton,
                    calendar: true,
                },
                OptionType::Time {
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
                OptionType::Text("a1".to_string()),
                OptionType::Text("a2".to_string()),
            ]),
        };

        let q4 = Question {
            text: "q4".to_string(),
            options: Options::MultiSelect(vec![
                OptionType::Time {
                    date: NaiveDate::from_ymd_opt(2030, 11, 11).unwrap(),
                    time: HHMM { hh: 23, mm: 0 },
                    length: 55,
                    timezone: TimeZone::AmericaEdmonton,
                    calendar: true,
                },
                OptionType::Time {
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
