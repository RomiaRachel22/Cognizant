BEGIN
    DELETE FROM LoanReminders;
    FOR loan_rec IN (
        SELECT LoanID, CustomerID, DueDate
        FROM Loans
        WHERE DueDate BETWEEN SYSDATE AND SYSDATE + 30
    ) LOOP
        DECLARE
            v_customer_name Customers.Name%TYPE;
        BEGIN
            SELECT Name INTO v_customer_name
            FROM Customers
            WHERE CustomerID = loan_rec.CustomerID;

            INSERT INTO LoanReminders (Message)
            VALUES (
                'Reminder: Dear ' || v_customer_name ||
                ', your loan (ID: ' || loan_rec.LoanID ||
                ') is due on ' || TO_CHAR(loan_rec.DueDate, 'DD-MON-YYYY')
            );
        END;
    END LOOP;

    COMMIT;
END;