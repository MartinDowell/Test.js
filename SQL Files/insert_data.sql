CREATE TABLE IF NOT EXISTS prints  (
  id      INT AUTO_INCREMENT PRIMARY KEY,
  Name    VARCHAR(32),
  Artist  VARCHAR(32),
  Price   DECIMAL(6,2)
);

INSERT INTO prints (Name, Artist, Price)
VALUES ('Fields of Gold', 'Adam', 33.99),
      ('Destruction of a City', 'Steve', 74.99),
      ('Black Olive', 'John', 33.99),
      ('Yellow Peril', 'Adam', 11.99),
      ('Sheets of Blue', 'Paul', 5.99);

SELECT * FROM prints;

SELECT * FROM prints ORDER BY Artist DESC;
