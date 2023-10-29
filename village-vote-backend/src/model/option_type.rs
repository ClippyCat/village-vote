use chrono::NaiveDate;
use serde::{ser::SerializeStruct, Serialize};

use super::{TimeZone, HHMM};

/// Represents the type of the response option for a question.
///
/// Its name was chosen by its role in the JSON data.
pub(crate) enum OptionType {
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

impl Serialize for OptionType {
    fn serialize<S>(&self, serializer: S) -> Result<S::Ok, S::Error>
    where
        S: serde::Serializer,
    {
        match self {
            OptionType::Text(text) => serializer.serialize_str(text),
            OptionType::Time {
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
