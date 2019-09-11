SELECT id, CASE WHEN count(CASE WHEN RESULT==1 THEN 1 END)>1 THEN 'Fail' ELSE 'Pass' End as 'Status' from result_table GROUP BY id,result


/* return employee record with max salary (sub-qeury) */
SELECT * from employee where salary = (SELECT Max(salary) from employee)

/* select 2nd highest salary in employee table */
SELECT Max(salary) from employee where salary NOT IN (SELECT Max(salary) from employee)

/* select range of emplyee based on ID */
SELECT * from employee where year BETWEEN 2003 and 2006

/* employee name, highest salary and department */
SELECT e.employee_name, e.salary, d.department_name from employee as e INNER JOIN department as d on 
e.employee_id = d.id where e.salary IN (SELECT Max(salary) from employee)

/* highest salary, emplaoyee name, department name for each department */
SELECT e.employee_name, e.salary, d.department_name from employee as e INNER JOIN department as d on 
e.employee_id = d.id e.salary where IN (SELECT Max(salary) from employee group by department_id)

/* multiple student id with pass fail of multiple subject */
SELECT student_name, IF( count(IF(result='F',1,NULL))>0, 'F', 'P' ) FROM student_table group by student_id

