use test;

-- Delete the name column. It was causing some problem while loading the data

Create table sales(
Order_Date varchar(50),
Ship_Mode varchar(50),
Customer_ID varchar(50),
Segment varchar(50),
City varchar(50),
State varchar(50),
Region varchar(50),
Category varchar(50),
Sub_Category varchar(50),
Sales float,
Quantity int,
Discount float,
Profit float
);

drop table test.sales;



LOAD DATA LOCAL INFILE 'C:/xampp/htdocs/highcharts/data/data.csv' 
INTO TABLE test.sales
FIELDS TERMINATED BY ','
LINES TERMINATED BY '\r\n'
IGNORE 1 LINES;

select count(*) from test.sales;


