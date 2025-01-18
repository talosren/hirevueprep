/*
  # Initial Schema for HireVue Clone

  1. New Tables
    - `companies`
      - `id` (uuid, primary key)
      - `name` (text)
      - `logo_url` (text)
      - `created_at` (timestamp)
    
    - `questions`
      - `id` (uuid, primary key)
      - `company_id` (uuid, foreign key)
      - `question_text` (text)
      - `time_limit` (integer)
      - `max_retries` (integer)
      - `created_at` (timestamp)

    - `user_attempts`
      - `id` (uuid, primary key)
      - `user_id` (uuid, foreign key)
      - `question_id` (uuid, foreign key)
      - `attempt_number` (integer)
      - `created_at` (timestamp)

  2. Security
    - Enable RLS on all tables
    - Add policies for authenticated users
*/

-- Companies table
CREATE TABLE companies (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  logo_url text,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE companies ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can read companies"
  ON companies
  FOR SELECT
  TO authenticated
  USING (true);

-- Questions table
CREATE TABLE questions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  company_id uuid REFERENCES companies(id),
  question_text text NOT NULL,
  time_limit integer NOT NULL,
  max_retries integer NOT NULL DEFAULT 3,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE questions ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can read questions"
  ON questions
  FOR SELECT
  TO authenticated
  USING (true);

-- User attempts table
CREATE TABLE user_attempts (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES auth.users(id),
  question_id uuid REFERENCES questions(id),
  attempt_number integer NOT NULL DEFAULT 1,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE user_attempts ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can read own attempts"
  ON user_attempts
  FOR SELECT
  TO authenticated
  USING (auth.uid() = user_id);

CREATE POLICY "Users can insert own attempts"
  ON user_attempts
  FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = user_id);

-- Insert sample data
INSERT INTO companies (name, logo_url) VALUES
  ('Amazon', 'https://example.com/amazon-logo.png'),
  ('Google', 'https://example.com/google-logo.png'),
  ('Microsoft', 'https://example.com/microsoft-logo.png');

INSERT INTO questions (company_id, question_text, time_limit, max_retries)
SELECT 
  id,
  'Tell me about a time when you had to deal with a difficult customer.',
  180,
  3
FROM companies WHERE name = 'Amazon';

INSERT INTO questions (company_id, question_text, time_limit, max_retries)
SELECT 
  id,
  'Describe a project where you had to use your leadership skills.',
  120,
  3
FROM companies WHERE name = 'Google';

INSERT INTO questions (company_id, question_text, time_limit, max_retries)
SELECT 
  id,
  'How do you handle working under pressure?',
  180,
  3
FROM companies WHERE name = 'Microsoft';