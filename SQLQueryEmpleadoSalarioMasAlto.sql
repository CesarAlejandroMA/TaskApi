/* M�ximo salario por cada departamento */
WITH Ranked AS (
    SELECT  Id,
            Name,
            Department,
            Salary,
            RANK() OVER (PARTITION BY Department  /* Se utiliza RANK() para mostrar empates, ROW_NUMBER() muestra un solo registro */
                               ORDER BY Salary DESC) AS rn
    FROM Employees
)
SELECT  Id,
        Name,
        Department,
        Salary
FROM    Ranked
WHERE   rn = 1;        -- solo el 1.� (el de sueldo m�s alto) de cada grupo