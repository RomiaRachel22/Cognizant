SET SERVEROUTPUT ON;

DECLARE
    CURSOR cur_balances IS
        SELECT CustomerID, Balance
        FROM Customers
        WHERE Balance > 10000;

BEGIN
    FOR bal_rec IN cur_balances LOOP
        UPDATE Customers
        SET IsVIP = 'TRUE'
        WHERE CustomerID = bal_rec.CustomerID;
    END LOOP;

    COMMIT;
END;