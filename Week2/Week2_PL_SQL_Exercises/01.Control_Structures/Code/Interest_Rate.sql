SET SERVEROUTPUT ON;

DECLARE
    CURSOR cur_customers IS
        SELECT CustomerID, Age, LoanInterestRate
        FROM Customers
        WHERE Age > 60;

BEGIN
    FOR cust_rec IN cur_customers LOOP
        UPDATE Customers
        SET LoanInterestRate = LoanInterestRate - 1
        WHERE CustomerID = cust_rec.CustomerID;
    END LOOP;

    COMMIT;
END;