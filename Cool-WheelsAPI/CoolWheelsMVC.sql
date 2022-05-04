USE MASTER
GO

IF NOT EXISTS (
    SELECT [name]
    FROM sys.databases
    WHERE [name] = N'CoolWheelsMVC'
)
CREATE DATABASE CoolWheelsMVC
GO

USE CoolWheelsMVC
GO


DROP TABLE IF EXISTS Car;
DROP TABLE IF EXISTS Track;
DROP TABLE IF EXISTS Buyer;

CREATE TABLE Car (
	Id INTEGER NOT NULL PRIMARY KEY IDENTITY,
	Color VARCHAR(255) NOT NULL,
	[Name] VARCHAR(255) NOT NULL,
	[Year] VARCHAR(255) NOT NULL,
	Price DECIMAL(17, 2) NOT NULL,
	ImageUrl VARCHAR(255) NOT NULL,
	BuyerId INTEGER NOT NULL,
);

CREATE TABLE Track (
	Id INTEGER NOT NULL PRIMARY KEY IDENTITY,
	[Name] VARCHAR(255) NOT NULL,
	Price DECIMAL(17, 2) NOT NULL,
	ImageUrl VARCHAR(255) NOT NULL,
	BuyerId INTEGER NOT NULL,
);

CREATE TABLE Buyer (
	Id INTEGER NOT NULL PRIMARY KEY IDENTITY,
	FirebaseUserId NVARCHAR(28) NOT NULL,
	[Name] VARCHAR(255) NOT NULL,
	UserName VARCHAR(255) NOT NULL,
	Email VARCHAR(255) NOT NULL,
	About VARCHAR(255) NOT NULL,
	[Image] VARCHAR(255) NOT NULL,
	[Role] VARCHAR(255) NOT NULL,

	CONSTRAINT UQ_FirebaseUserId UNIQUE(FirebaseUserId)
);

INSERT INTO Buyer (FirebaseUserId, [Name], UserName, Email, About, [Image], [Role]) VALUES ('e63vr1XHHigSVCLoDlJs2L0HdnV2', 'Albert Chittaphong', 'albertchitta', 'albert123@gmail.com', 'Albert About Me', 'https://bootdey.com/img/Content/avatar/avatar2.png', 'admin');
INSERT INTO Buyer (FirebaseUserId, [Name], UserName, Email, About, [Image], [Role]) VALUES ('Y14CjkUJgiUj6R0GgUO6VkCt4tw2', 'Klay Thacker', 'KlayTT', 'klay123@gmail.com', 'Klay About Me', 'https://bootdey.com/img/Content/avatar/avatar6.png', 'admin');
INSERT INTO Buyer (FirebaseUserId, [Name], UserName, Email, About, [Image], [Role]) VALUES ('XlTocXr2MKQ05Emi9CpI7aIfd073', 'Gabriel Smith', 'Gabrielsmith1998', 'gabriel123@gmail.com', 'Gabriel About Me', 'https://bootdey.com/img/Content/avatar/avatar4.png', 'user');
INSERT INTO Buyer (FirebaseUserId, [Name], UserName, Email, About, [Image], [Role]) VALUES ('AVukDXArGdfEYdDn6vbmpJ99Hbu1', 'Nathan Blackman', 'NathanBlackman', 'nathan123@gmail.com', 'Nathan About Me', 'https://bootdey.com/img/Content/avatar/avatar5.png', 'user');
INSERT INTO Buyer (FirebaseUserId, [Name], UserName, Email, About, [Image], [Role]) VALUES ('AVukDXArGdfEYdDn6vbmpJ99Hbu2', 'Nathan Blackman', 'NathanBlackman', 'nathan123@gmail.com', 'Nathan About Me', 'https://bootdey.com/img/Content/avatar/avatar5.png', 'user');


INSERT INTO Car (Color, [Name], [Year], Price, ImageUrl, BuyerId) VALUES ('Red', 'Ferrari 312P', '1970', $5000.00, 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/red-ferrari-hot-wheel-white-1545153926.jpg', 1);
INSERT INTO Car (Color, [Name], [Year], Price, ImageUrl, BuyerId) VALUES ('Magenta', 'Rodger Dodger', '1974', $3000.00, 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/roger-dodger-magenta-1545149164.jpg', 2);
INSERT INTO Car (Color, [Name], [Year], Price, ImageUrl, BuyerId) VALUES ('Brown', 'Custom Camaro', '1968', $3000.00, 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/brown-white-camaro-hot-wheels-1545149679.jpg', 3);
INSERT INTO Car (Color, [Name], [Year], Price, ImageUrl, BuyerId) VALUES ('White', 'Z-Whiz', '1977', $3000.00, 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/white-z-whiz-datsun-jpg-1545151212.jpg', 4);

INSERT INTO Track ([Name], Price, ImageUrl, BuyerId) VALUES ('Criss Cross Crash Track Set', $54.99, 'https://m.media-amazon.com/images/I/71Ed96clU1L._AC_SX679_.jpg', 1);
INSERT INTO Track ([Name], Price, ImageUrl, BuyerId) VALUES ('Total Turbo Takeover Track Set', $44.99, 'https://m.media-amazon.com/images/I/61nFfEDFRYL._AC_SX355_.jpg', 2);
INSERT INTO Track ([Name], Price, ImageUrl, BuyerId) VALUES ('City Robo T-Rex Ultimate Garage', $99.00, 'https://m.media-amazon.com/images/I/81nH0-AetxS._AC_SY355_.jpg', 3);
INSERT INTO Track ([Name], Price, ImageUrl, BuyerId) VALUES ('Spin Storm Track Set', $54.99, 'https://m.media-amazon.com/images/I/71CqE9eToCL._AC_SX355_.jpg', 4);
