use itertools::Itertools;
use sqlx::{sqlite::SqlitePoolOptions, Pool, Sqlite};

use crate::model;

pub(crate) mod dao;

pub async fn connect() -> Pool<Sqlite> {
    SqlitePoolOptions::new()
        .max_connections(5)
        .connect("polls.db")
        .await
        .unwrap()
}

pub(crate) async fn read_poll(
    pool: &sqlx::Pool<sqlx::Sqlite>,
    id: i64,
) -> Result<model::Poll, sqlx::Error> {
    let dao::Poll { id: _, name } = dao::Poll::read_single(pool, id).await?;
    let questions: Vec<dao::Question> = dao::Question::read_all_for_poll_id(pool, id).await?;
    // TODO: load the necessary data from the database and transform it into the model representation
    for (question_type, q_group) in &questions.into_iter().group_by(|q| q.question_type) {
        continue;
    }
    let questions = todo!();
    let poll = model::Poll {
        title: name,
        questions,
    };
    Ok(poll)
}
