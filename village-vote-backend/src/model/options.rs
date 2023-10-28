use serde::Serialize;

use super::OptionType;

#[derive(Serialize)]
#[serde(tag = "type", content = "options")]
#[serde(rename_all = "camelCase")]
pub(crate) enum Options {
    SingleSelect(Vec<OptionType>),
    MultiSelect(Vec<OptionType>),
    // Rank,
}
