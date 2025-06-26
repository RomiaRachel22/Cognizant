CREATE TABLE Loans (
    LoanID      NUMBER PRIMARY KEY,
    CustomerID  NUMBER,
    DueDate     DATE,
    FOREIGN KEY (CustomerID) REFERENCES Customers(CustomerID)
);