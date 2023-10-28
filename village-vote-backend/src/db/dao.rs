use sqlx::FromRow;

#[derive(FromRow, Debug)]
pub(crate) struct Poll {
    id: i64,
    name: String,
}

impl Poll {
    pub async fn read_all(pool: &sqlx::Pool<sqlx::Sqlite>) -> Result<Vec<Poll>, sqlx::Error> {
        sqlx::query_as::<_, Poll>("SELECT * FROM poll")
            .fetch_all(pool)
            .await
    }
}

#[derive(FromRow, Debug)]
pub(crate) struct QuestionType {
    id: i64,
    name: String,
    table_name: String,
}

impl QuestionType {
    pub async fn read_all(
        pool: &sqlx::Pool<sqlx::Sqlite>,
    ) -> Result<Vec<QuestionType>, sqlx::Error> {
        sqlx::query_as::<_, QuestionType>("SELECT * FROM question_type")
            .fetch_all(pool)
            .await
    }
}

#[derive(FromRow, Debug)]
pub(crate) struct SelectQuestion {
    id: i64,
    choices_count: i64,
}

impl SelectQuestion {
    pub async fn read_all(
        pool: &sqlx::Pool<sqlx::Sqlite>,
    ) -> Result<Vec<SelectQuestion>, sqlx::Error> {
        sqlx::query_as::<_, SelectQuestion>("SELECT * FROM select_question")
            .fetch_all(pool)
            .await
    }
}

#[derive(FromRow, Debug)]
pub(crate) struct MultiSelectQuestion {
    id: i64,
    choices_count: i64,
}

impl MultiSelectQuestion {
    pub async fn read_all(
        pool: &sqlx::Pool<sqlx::Sqlite>,
    ) -> Result<Vec<MultiSelectQuestion>, sqlx::Error> {
        sqlx::query_as::<_, MultiSelectQuestion>("SELECT * FROM multi_select_question")
            .fetch_all(pool)
            .await
    }
}

#[derive(FromRow, Debug)]
pub(crate) struct RankQuestion {
    id: i64,
    choices_count: i64,
}

impl RankQuestion {
    pub async fn read_all(
        pool: &sqlx::Pool<sqlx::Sqlite>,
    ) -> Result<Vec<RankQuestion>, sqlx::Error> {
        sqlx::query_as::<_, RankQuestion>("SELECT * FROM rank_question")
            .fetch_all(pool)
            .await
    }
}

#[derive(FromRow, Debug)]
pub(crate) struct Question {
    id: i64,
    text: String,
    question_type: i64,
}

impl Question {
    pub async fn read_all(pool: &sqlx::Pool<sqlx::Sqlite>) -> Result<Vec<Question>, sqlx::Error> {
        sqlx::query_as::<_, Question>("SELECT * FROM question")
            .fetch_all(pool)
            .await
    }
}

#[derive(FromRow, Debug)]
pub(crate) struct OptionType {
    id: i64,
    name: String,
    table_name: String,
}

impl OptionType {
    pub async fn read_all(pool: &sqlx::Pool<sqlx::Sqlite>) -> Result<Vec<OptionType>, sqlx::Error> {
        sqlx::query_as::<_, OptionType>("SELECT * FROM option_type")
            .fetch_all(pool)
            .await
    }
}

#[derive(FromRow, Debug)]
pub(crate) struct TextOption {
    id: i64,
    text: String,
}

impl TextOption {
    pub async fn read_all(pool: &sqlx::Pool<sqlx::Sqlite>) -> Result<Vec<TextOption>, sqlx::Error> {
        sqlx::query_as::<_, TextOption>("SELECT * FROM text_option")
            .fetch_all(pool)
            .await
    }
}

#[derive(FromRow, Debug)]
pub(crate) struct TimeOption {
    id: i64,
    year: i64,
    month: i64,
    day: i64,
    hour: i64,
    minute: i64,
    length: i64,
    timezone_id: i64,
}

impl TimeOption {
    pub async fn read_all(pool: &sqlx::Pool<sqlx::Sqlite>) -> Result<Vec<TimeOption>, sqlx::Error> {
        sqlx::query_as::<_, TimeOption>("SELECT * FROM time_option")
            .fetch_all(pool)
            .await
    }
}
