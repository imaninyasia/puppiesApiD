BEGIN;
DROP TABLE IF EXISTS puppies;

CREATE TABLE puppies (
  id SERIAL PRIMARY KEY,
  name VARCHAR NOT NULL,
  url TEXT NOT NULL,
  description TEXT,
  likes INT NOT NULL DEFAULT 0,
  created_at TIMESTAMP DEFAULT current_timestamp
);

COPY puppies (name, url)
-- UPDATE THIS PATH WITH YOUR OWN!
FROM '/Users/imani/code/urbanArts/workshop/puppies-api/db/puppies.csv' with (format csv, delimiter ',');

COMMIT;
