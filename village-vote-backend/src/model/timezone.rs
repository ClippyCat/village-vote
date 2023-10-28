use serde::Serialize;

pub(crate) enum TimeZone {
    AmericaEdmonton,
}

impl Serialize for TimeZone {
    fn serialize<S: serde::Serializer>(&self, serializer: S) -> Result<S::Ok, S::Error> {
        match self {
            TimeZone::AmericaEdmonton => serializer.serialize_str("America/Edmonton"),
        }
    }
}
