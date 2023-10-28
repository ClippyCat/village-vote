use serde::Serialize;

use super::Options;

#[derive(Serialize)]
pub(crate) struct Question {
    pub(crate) text: String,
    pub(crate) options: Options,
}
