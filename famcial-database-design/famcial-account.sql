SELECT * FROM famcial.account;

INSERT INTO famcial.account (name, type, statement_date, due_date, credit_limit, balance, note) 
VALUES('EY', 'cash', '2020-08-21', '2020-08-30', '1000.12', '2000.22', 'note'); 

UPDATE famcial.account 
SET name='ey1', type='cash', statement_date='2020-08-21', due_date='2020-08-30',credit_limit='1000',balance='3000', note='note1'
WHERE id = 1 ;