use sqlx::{sqlite::SqlitePoolOptions, Pool, Sqlite};

pub(crate) mod dao;

pub async fn connect() -> Pool<Sqlite> {
    SqlitePoolOptions::new()
        .max_connections(5)
        .connect("polls.db")
        .await
        .unwrap()
}
