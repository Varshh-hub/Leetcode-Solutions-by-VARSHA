# Write your MySQL query statement below
select distinct p.Email from Person as p where 
Email in(Select Email from Person where Email = p.email and Id != p.Id);