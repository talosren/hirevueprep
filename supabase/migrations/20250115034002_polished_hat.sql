/*
  # Add J.P. Morgan and interview questions

  1. New Data
    - Add J.P. Morgan to companies table
    - Add J.P. Morgan specific interview questions
*/

-- Add J.P. Morgan
INSERT INTO companies (name, logo_url)
VALUES ('J.P. Morgan', 'https://example.com/jpmorgan-logo.png');

-- Add J.P. Morgan questions
WITH jp_morgan AS (
  SELECT id FROM companies WHERE name = 'J.P. Morgan' LIMIT 1
)
INSERT INTO questions (company_id, question_text, time_limit, max_retries)
VALUES 
  ((SELECT id FROM jp_morgan), 'What major recent event should clients be worried about and how does that affect their portfolios?', 180, 3),
  ((SELECT id FROM jp_morgan), 'Tell us about a time you took initiative to go above and beyond what was originally expected on a project?', 180, 3),
  ((SELECT id FROM jp_morgan), 'Discuss a recent headline in the financial that caught your attention and why', 180, 3),
  ((SELECT id FROM jp_morgan), 'Describe a situation in which you learned something significant from a mistake you made', 180, 3);