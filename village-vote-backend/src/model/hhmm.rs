use serde::Serialize;

/// Time of the day in `HH:MM` format.
pub(crate) struct HHMM {
    /// Hour (in army time)
    pub(crate) hh: u8,
    /// Minute
    pub(crate) mm: u8,
}

impl Serialize for HHMM {
    fn serialize<S: serde::Serializer>(&self, serializer: S) -> Result<S::Ok, S::Error> {
        serializer.serialize_str(&format!("{:02}:{:02}", self.hh, self.mm))
    }
}
