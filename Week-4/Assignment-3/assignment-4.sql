-- 1. Write an SQL statement to select all articles with their author’s email.
SELECT a.title, a.content, u.email FROM article AS a 
INNER JOIN user AS u ON a.user_id = u.id
-- 2. Write another SQL statement to select articles from 7th to 12th sorted by id.
SELECT * FROM article 
ORDER BY article_id 
LIMIT 6 OFFSET 6
