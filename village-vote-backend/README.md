# `village-vote-backend`

To run this project using the default database, use `cargo run` within the `village-vote-backend` directory.

If you have altered the code to use another database, we recommend using `sqlx` to run the database migrations first. `sqlx mig run`.

## Database Migrations

Note: You will need to set the `DATABASE_URL` environemnt variable to be able to run the migrations, since `sqlx` does not have access to the codebase, only the migrations.

### Linux

There is a `.env` file in the directory that you can import to use the standard database for migrations: `source .env` should import the environment variables when using the `bash` shell.

### Windows Powershell

There is a `.env.ps1` file in the directory that you can import to use for the standard database migration: `.\.env.ps1` should import the enviroment variabels used when running `sqlx`.

