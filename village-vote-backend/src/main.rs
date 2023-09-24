mod db;

use std::{net::SocketAddr, sync::Arc};

use axum::{http::StatusCode, response::IntoResponse, routing::get, Router};

use sqlx::{Pool, Sqlite};

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
    let router = Router::new().route("/", get(index)).with_state(state);
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
