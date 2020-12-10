-- Multi-Table Query Practice

-- Display the ProductName and CategoryName for all products in the database. Shows 77 records.
SELECT 
    p.productname, 
    c.categoryname
FROM Product p
JOIN Category c
    ON p.categoryid = c.id;

-- Display the order Id and shipper CompanyName for all orders placed before August 9 2012. Shows 429 records.
SELECT 
    o.id,
    s.companyname
FROM Shipper s
JOIN "Order" o
    ON o.shipvia = s.id
WHERE o.orderdate < "2012-08-09";

-- Display the name and quantity of the products ordered in order with Id 10251. Sort by ProductName. Shows 3 records.
SELECT 
    o.id,
    p.productname name,
    od.quantity
FROM [Order] o
JOIN orderdetail od 
    ON o.id = od.orderid
JOIN product p
    ON od.productid = p.id
WHERE o.id = 10251
ORDER BY productname;

-- Display the OrderID, Customer's Company Name and the employee's LastName for every order. All columns should be labeled clearly. Displays 16,789 records.
SELECT 
    o.Id OrderID,
    c.CompanyName,
    e.LastName EmployeeLastName
FROM [Order] o
JOIN Customer c
    ON o.CustomerId = c.Id
JOIN Employee e
    ON o.EmployeeId = e.Id;