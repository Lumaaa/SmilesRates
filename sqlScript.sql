
CREATE DATABASE smileyDB;


CREATE TABLE smiley ( 
smileyId int NOT NULL IDENTITY(1,1) PRIMARY KEY,
verysad int NOT NULL,
sad int NOT NULL,
tja int NOT NULL,
happy int NOT NULL,
veryhappy int NOT NULL,
sum int NOT NULL,
rate decimal(2, 0) NOT NULL,
click int NOT NULL,
createDate DATETIME DEFAULT GETDATE(),
)