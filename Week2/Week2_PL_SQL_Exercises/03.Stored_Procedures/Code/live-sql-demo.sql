BEGIN
    ProcessMonthlyInterest;
END;
/
SELECT * FROM Accounts;
BEGIN
    UpdateEmployeeBonus(101, 10);
END;
/
SELECT * FROM Employees;
BEGIN
    TransferFunds(2004, 4002, 500);
END;
/

SELECT * FROM Accounts;