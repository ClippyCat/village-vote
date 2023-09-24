New-Item -Name "polls.db" -ItemType File;
$env:DATABASE_URL = "sqlite://polls.db";
