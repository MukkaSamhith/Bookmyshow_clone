--CREATE TABLE Hollywood(movie_name varchar(20),movie_id integer NOT NULL PRIMARY KEY,director_name varchar(20),producer_name VARCHAR(20),actors VARCHAR(40),budget INTEGER,movie_url VARCHAR(255),movie_coverpage VARCHAR(255));

--INSERT INTO Hollywood(movie_name,movie_id,director_name ,producer_name,actors,budget,movie_url,movie_coverpage)
--VALUES ('Avatar',3,'James Cameron','Jon Landau','Sam Worthington Zoe Saldana',700,'https://www.youtube.com/watch?v=8QLYI_g9HVU','https://upload.wikimedia.org/wikipedia/en/5/54/Avatar_The_Way_of_Water_poster.jpg');

--CREATE TABLE Bollywood(movie_name varchar(20),movie_id integer NOT NULL PRIMARY KEY,director_name varchar(20),producer_name VARCHAR(20),actors VARCHAR(40),budget INTEGER,movie_url VARCHAR(255),movie_coverpage VARCHAR(255));

--INSERT INTO Bollywood(movie_name,movie_id,director_name ,producer_name,actors,budget,movie_url,movie_coverpage)
--VALUES ('Jawan',1,'Atlee Kumar','Gauri Khan','Sharukh Khan Nayanthara',400,'https://www.youtube.com/watch?v=VAdGW7QDJiU','https://www.91-cdn.com/hub/wp-content/uploads/2023/10/Jawan.png');

--SELECT *
--FROM Bollywood

--UPDATE Hollywood
--SET movie_id=1
--WHERE movie_name='Avatar'

--SELECT *
--FROM Hollywood

--CREATE TABLE Tollywood(movie_name varchar(20),movie_id integer NOT NULL PRIMARY KEY,director_name varchar(20),producer_name VARCHAR(20),actors VARCHAR(40),budget INTEGER,movie_url VARCHAR(255),movie_coverpage VARCHAR(255));

--INSERT INTO Tollywood(movie_name,movie_id,director_name ,producer_name,actors,budget,movie_url,movie_coverpage)
--VALUES ('Bahubali',1,'Rajamouli','Soobu','Prabhas Anuskha Rana',450,'https://www.youtube.com/watch?v=tBvvICYcPxM','https://img.etimg.com/thumb/msid-58275512,width-480,height-360,imgsize-226840/the-magnum-opus-baahubali-the-beginning.jpg');

--SELECT *
--FROM Tollywood
--DROP Table Seats

--CREATE TABLE Seats(id INT PRIMARY KEY,p1 varchar(10),p2 varchar(10),p3 varchar(10),p4 varchar(10),p5 varchar(10),p6 varchar(10),p7 varchar(10),p8 varchar(10),p9 varchar(10),p10 varchar(10));


--DELETE FROM Hollywood
--WHERE budget=0;

--CREATE TABLE Seats1(id INT PRIMARY key,seat1 BOOLEAN,seat2 BOOLEAN,seat3 BOOLEAN,seat4 BOOLEAN,seat5 BOOLEAN,seat6 BOOLEAN,seat7 BOOLEAN,seat8 BOOLEAN,seat9 BOOLEAN,seat10 BOOLEAN)
--INSERT INTO Seats1
--VALUES (1,false,false,false,false,false,false,false,false,false,false)

--SELECT * FROM Seats1
--CREATE TABLE Seats1(id INT PRIMARY key,seat1 BOOLEAN,seat2 BOOLEAN,seat3 BOOLEAN,seat4 BOOLEAN,seat5 BOOLEAN,seat6 BOOLEAN,seat7 BOOLEAN,seat8 BOOLEAN,seat9 BOOLEAN,seat10 BOOLEAN)

--INSERT INTO Seats1(id,seat1,seat2,seat3,seat4,seat5,seat6,seat7,seat8,seat9,seat10,seat11,seat12,seat13,seat14,seat15,seat16,seat17,seat18,seat19,seat20,seat21,seat22,seat23,seat24,seat25,seat26,seat27,seat28,seat29,seat30,seat31,seat32,seat33,seat34,seat35,seat36,seat37,seat38,seat39,seat40,seat41,seat42,seat43,seat44,seat45,seat46,seat47,seat48,seat49,seat50)
--VALUES (8,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false)
--CREATE TABLE Seats2(id INT PRIMARY key,seat1 BOOLEAN,seat2 BOOLEAN,seat3 BOOLEAN,seat4 BOOLEAN,seat5 BOOLEAN,seat6 BOOLEAN,seat7 BOOLEAN,seat8 BOOLEAN,seat9 BOOLEAN,seat10 BOOLEAN)
--INSERT INTO Seats2
--VALUES (1,false,false,false,false,false,false,false,false,false,false),(2,false,false,false,false,false,false,false,false,false,false),(3,false,false,false,false,false,false,false,false,false,false)
--SELECT * FROM Seats2

--ALTER TABLE Seats1
--ADD seat50 BOOLEAN

--INSERT INTO Seats1(seat11,seat12,seat13,seat14,seat15,seat16,seat17,seat18,seat19,seat20,seat21,seat22,seat23,seat24,seat25,seat26,seat27,seat28,seat29,seat30,seat31,seat32,seat33,seat34,seat35,seat36,seat37,seat38,seat39,seat40,seat41,seat42,seat43,seat44,seat45,seat46,seat47,seat48,seat49,seat50)
--VALUES(false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false)

--UPDATE Seats1
--SET seat11=false,seat12=false,seat13=false,seat14=false,seat15=false,seat16=false,seat17=false,seat18=false,seat19=false,seat20=false,seat21=false,seat22=false,seat23=false,seat24=false,seat25=false,seat26=false,seat27=false,seat28=false,seat29=false,seat30=false,seat31=false,seat32=false,seat33=false,seat34=false,seat35=false,seat36=false,seat37=false,seat38=false,seat39=false,seat40=false,seat41=false,seat42=false,seat43=false,seat44=false,seat45=false,seat46=false,seat47=false,seat48=false,seat49=false,seat50=false
--WHERE id=2

/*UPDATE Seats1
SET seat1=false,seat2=false,seat3=false,seat4=false,seat5=false,seat6=false,seat7=false,seat8=false,seat9=false,seat10=false
WHERE id=NULL*/

--ALTER TABLE Seats2
--ADD seat50 BOOLEAN

/*UPDATE Seats2
SET seat11=false,seat12=false,seat13=false,seat14=false,seat15=false,seat16=false,seat17=false,seat18=false,seat19=false,seat20=false,seat21=false,seat22=false,seat23=false,seat24=false,seat25=false,seat26=false,seat27=false,seat28=false,seat29=false,seat30=false,seat31=false,seat32=false,seat33=false,seat34=false,seat35=false,seat36=false,seat37=false,seat38=false,seat39=false,seat40=false,seat41=false,seat42=false,seat43=false,seat44=false,seat45=false,seat46=false,seat47=false,seat48=false,seat49=false,seat50=false
WHERE id=3*/

/*INSERT INTO Seats2
VALUES (7,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false)*/
--SELECT * FROM Seats2

--SELECT * FROM bollywood

/*UPDATE bollywood
SET movie_url='https://www.youtube.com/watch?v=6DCOjq0omBc'
WHERE movie_id=4;*/

--SELECT * FROM Seats1
-- Example trigger to update the last_modified timestamp
/*
ALTER TABLE Hollywood
ADD COLUMN last_modified TIMESTAMP;
*/
--SELECT * FROM Hollywood


CREATE TRIGGER update_last_modified
AFTER INSERT ON hollywood
FOR EACH ROW
BEGIN
    UPDATE hollywood
    SET last_modified = CURRENT_TIMESTAMP
    WHERE movie_id = NEW.movie_id;
END;


SELECT COUNT(*) AS movie_count FROM Hollywood

CREATE PROCEDURE GetHollywoodMovies AS
BEGIN
    SELECT * FROM hollywood;
END;


SELECT *
FROM hollywood
JOIN bollywood ON hollywood.movie_name = bollywood.movie_name;



/*SELECT *
FROM Bollywood*/
SELECT * FROM Hollywood

