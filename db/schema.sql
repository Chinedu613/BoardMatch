DROP DATABASE IF EXISTS gamematchdb;
CREATE DATABASE gamematchdb;
USE gamematchdb;

CREATE TABLE Users (
    id INTEGER NOT NULL AUTO_INCREMENT,    
    username varchar(50) NOT NULL,
    password varchar(50) NOT NULL,
    lat decimal(10, 4),
    lon decimal(10, 4),
    favoriteGame varchar(100),
    skillLevel integer,
    email varchar(100),
    testSetSize integer,
    minSkillLevel integer,
    maxSkillLevel integer,
    userBio varchar(200),
    city varchar(50),
    PRIMARY KEY (id)
);

CREATE TABLE Swipes (
    id INTEGER NOT NULL AUTO_INCREMENT,
    userId INTEGER NOT NULL,
    prospectId INTEGER NOT NULL,
    distance float(10, 2),
    message varchar(200),
    status varchar(20),
    game varchar(200),
    PRIMARY KEY (id),
    FOREIGN KEY (userId) REFERENCES Users(id) ON DELETE CASCADE
);
