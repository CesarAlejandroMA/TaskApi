/* Aumentar 10 % los salarios del departamento IT */
BEGIN TRAN;                     -- deshacer si hace falta

UPDATE  Employees
SET     Salary = ROUND(Salary * 1.10, 2)   -- 10 %, redondeo a 2 decimales.
WHERE   Department = 'IT';

-- Verificación rápida
SELECT Id, Name, Department, Salary
FROM   Employees
WHERE  Department = 'IT';

COMMIT;                         -- ROLLBACK si se desea anular
