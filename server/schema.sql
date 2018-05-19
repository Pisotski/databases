CREATE DATABASE chat;

USE chat;

CREATE TABLE messages (
  id int NOT NULL AUTO_INCREMENT,
  userid int NOT NULL,
  text VARCHAR(200) NOT NULL,
  roomname VARCHAR(20),
  PRIMARY KEY(ID)
);

CREATE TABLE users (
  id int NOT NULL AUTO_INCREMENT,
  username VARCHAR(40) NOT NULL,
  PRIMARY KEY(ID)
);

-- CREATE TABLE users (
--   userid INT(30) AUTO_INCREMENT PRIMARY KEY,
--   username VARCHAR(30) NOT NULL
-- );

-- CREATE TABLE rooms (
--   roomID INT(30) AUTO_INCREMENT PRIMARY KEY,
--   roomname VARCHAR(15) NOT NULL
-- );

-- CREATE TABLE messages (
--   /* Describe your table here.*/
--   messageID INT(30) AUTO_INCREMENT PRIMARY KEY,
--   message VARCHAR(300) NOT NULL,
--   userID INT(30) REFERENCES users(userID),
--   roomID INT(30) REFERENCES rooms(roomID)
-- );



/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

