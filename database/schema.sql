DROP TABLE IF EXISTS projects;
CREATE TABLE projects (
  id SERIAL PRIMARY KEY,
  project_name VARCHAR(255) NOT NULL,
  description TEXT NOT NULL
);
