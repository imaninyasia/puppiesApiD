
# EDIT THE SEED FILE
- Change all instances where you find the following comment `-- UPDATE THIS PATH WITH YOUR OWN!`
- Update it with your own ABSOLUTE path to the `migration.sql` file

# Steps to seed database (ORDER IS IMPORTANT)
1. `dropdb puppiesapi`
2. `createdb puppiesapi`
3. `psql -d puppiesapi -f ./db/migration.sql`

# dotenv
1. create a `.env` file at the root of your project
2. add the following info (**UPDATE** `USER=` with your username):
```
  DB_HOST=localhost
  DB_USER=<your database username>
  DB_PASS=
  DB_NAME=puppiesapi
  DB_PORT=5432
  NODE_ENV=development
```

# npm
1. in the terminal type: `npm install` (from the root of your project)

# helpful commands
`\du` to see all users (inside psql)

# helpful links
- [fetch](https://github.com/github/fetch)
- [pg-promise](https://github.com/vitaly-t/pg-promise)
- [postgreSQL Table Expressions](https://www.postgresql.org/docs/9.3/static/queries-table-expressions.html)
