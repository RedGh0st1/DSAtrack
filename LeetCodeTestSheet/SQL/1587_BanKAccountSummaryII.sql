--Write a solution to report the name and balance of users with a balance higher than 10000. The balance of an account is equal to the sum of the amounts of all transactions involving that account.
--Return the result table in any order.
--The result format is in the following example.

 

--Example 1:
--Output: 
--+------------+------------+
--| name       | balance    |
--+------------+------------+
--| Alice      | 11000      |
--+------------+------------+
--Explanation: 
--Alice's balance is (7000 + 7000 - 3000) = 11000.
--Bob's balance is 1000.
--Charlie's balance is (6000 + 6000 - 4000) = 8000.

--# Write your MySQL query statement below
SELECT name, sum(amount) AS balance
FROM Transactions AS T
JOIN Users AS U
ON U.account = T.account
GROUP BY name
HAVING balance > 10000;


