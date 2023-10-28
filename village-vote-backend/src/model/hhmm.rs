use serde::Serialize;

pub(crate) struct HHMM {
    pub(crate) hh: u8,
    pub(crate) mm: u8,
}

impl Serialize for HHMM {
    fn serialize<S: serde::Serializer>(&self, serializer: S) -> Result<S::Ok, S::Error> {
        serializer.serialize_str(&format!("{:02}:{:02}", self.hh, self.mm))
    }
}
