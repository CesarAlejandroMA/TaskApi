/* poblar tabla Employees con 10 registros de ejemplo */
BEGIN TRAN;

INSERT INTO Employees (Id, Name, Department, Salary) VALUES
(1, 'Ana Garc�a',      'IT',         75000.00),
(2, 'Luis Rodr�guez',  'IT',         68000.00),
(3, 'Mar�a L�pez',     'HR',         55000.00),
(4, 'Carlos S�nchez',  'HR',         52000.00),
(5, 'Elena Torres',    'Finance',    80000.00),
(6, 'Jorge Mart�nez',  'Finance',    78000.00),
(7, 'Paula Ram�rez',   'Marketing',  60000.00),
(8, 'Ricardo D�az',    'Marketing',  62000.00),
(9, 'Sof�a Herrera',   'Operations', 70000.00),
(10,'Gabriel Castro',  'Operations', 69000.00),
(11, 'Diego Irreno',      'IT',         75000.00);

COMMIT;

/* Comprueba la carga */
SELECT * FROM Employees;
