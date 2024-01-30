-- 1581. Customer Who Visited but Did Not Make Any Transactions
-- Write a solution to find the IDs of the users who visited without making any transactions and the number of times they made these types of visits.
-- Return the result table sorted in any order.
--The result format is in the following example.


-- EASY
-- Intuition


   
 SELECT a.customer_id , count(a.visit_id) AS count_no_trans
 FROM Visits as a
 LEFT JOIN Transactions as b
 ON a.visit_id = b.visit_id
 WHERE b.transaction_id is NULL
 GROUP BY a.customer_id;
