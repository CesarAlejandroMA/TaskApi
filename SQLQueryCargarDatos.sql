/* poblar tabla Employees con 10 registros de ejemplo */
BEGIN TRAN;

INSERT INTO Employees (Id, Name, Department, Salary) VALUES
(1, 'Ana García',      'IT',         75000.00),
(2, 'Luis Rodríguez',  'IT',         68000.00),
(3, 'María López',     'HR',         55000.00),
(4, 'Carlos Sánchez',  'HR',         52000.00),
(5, 'Elena Torres',    'Finance',    80000.00),
(6, 'Jorge Martínez',  'Finance',    78000.00),
(7, 'Paula Ramírez',   'Marketing',  60000.00),
(8, 'Ricardo Díaz',    'Marketing',  62000.00),
(9, 'Sofía Herrera',   'Operations', 70000.00),
(10,'Gabriel Castro',  'Operations', 69000.00),
(11, 'Diego Irreno',      'IT',         75000.00);

COMMIT;

/* Comprueba la carga */
SELECT * FROM Employees;
