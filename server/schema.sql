CREATE DATABASE chat;

USE chat;

CREATE TABLE users (
  userID INT(30) AUTO_INCREMENT PRIMARY KEY,
  username VARCHAR(30) NOT NULL
);

CREATE TABLE rooms (
  roomID INT(30) AUTO_INCREMENT PRIMARY KEY,
  roomname VARCHAR(15) NOT NULL
);

CREATE TABLE messages (
  /* Describe your table here.*/
  messageID INT(30) AUTO_INCREMENT PRIMARY KEY,
  message VARCHAR(300) NOT NULL,
  /* will be reference to external USER ID*/
  userID INT(30) REFERENCES users(userID),
  roomID INT(30) REFERENCES rooms(roomID)
  -- FOREIGN KEY (userID) REFERENCES users(userID),
  -- FOREIGN KEY (roomID) REFERENCES rooms(roomID)
);

/* Create other tables and define schemas for them here! */
-- CREATE TABLE friends (
--   friendsID INT(30) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
--   userID INT(30),
--   userfriendID INT(30),
--   FOREIGN KEY (userID) REFERENCES users(userID),
--   FOREIGN KEY (userfriendID) REFERENCES users(userfriendID)
-- );
/* 
ALTER TABLE --> 
  look into ADD 
*/


/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

