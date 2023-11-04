mod db;

use std::{net::SocketAddr, sync::Arc};

use axum::{http::StatusCode, response::IntoResponse, routing::get, Router};
use sqlx::{Pool, Sqlite};

mod model;

use model::Poll;

#[derive(Clone)]
pub struct ServerState {
    db_pool: Arc<Pool<Sqlite>>,
}

async fn index() -> impl IntoResponse {
    (StatusCode::OK, "Hello :)".to_string())
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
                let data = Poll::default();
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

#[cfg(test)]
mod tests {
    use sqlx::{pool, Pool, Sqlite};

    #[test]
    fn print_default_data() {
        let data = super::Poll::default();
        println!("{}", serde_json::to_string_pretty(&data).unwrap());
    }

    #[tokio::test]
    async fn print_all_polls() {
        let pool: Pool<Sqlite> = pool::PoolOptions::new()
            .max_connections(5)
            .connect("polls.db")
            .await
            .unwrap();
        let polls = super::db::dao::Poll::read_all(&pool).await.unwrap();
        println!("{:?}", polls);
    }
}
