CREATE TABLE Customers (
    CustomerID      NUMBER PRIMARY KEY,
    Name            VARCHAR2(100),
    Age             NUMBER,
    Balance         NUMBER,
    LoanInterestRate NUMBER(5,2),
    IsVIP           VARCHAR2(5)
);