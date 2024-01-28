This application is designed to help users track their personal expenses efficiently. It utilizes a Node.js backend and a Next.js frontend to provide a seamless user experience.

## Installation
Install dependencies for both the frontend and backend:

## Both server and client running on node version - 18.17.0

For Frontend:- 
-- npm install

For Backend:- 
-- npm install

## Database Setup
This application uses MySQL as its database. Follow these steps to set up the database:

Start MySQL server and log in to your MySQL client.


Create a new database:-
-- CREATE DATABASE personal_finance;

Use the created database:
-- USE personal_finance;


Create the personal_finance table:
-- CREATE TABLE personal_finance (
    username VARCHAR(200),
    transaction VARCHAR(200),
    amount DECIMAL(10, 2),
    total DECIMAL(10)
);

Insert dummy values (optional):
-- INSERT INTO personal_finance (username, transaction, amount, total)
VALUES
    ('user1', 'credited', 50.25, NULL),
    ('user1', 'Debited', 20.50, NULL),
    ('user2', 'credited', 100.75, NULL),
    ('user1', 'credited', 30.00, NULL),
    ('user2', 'credited', 75.50, NULL);

## Start the backend server:
-- npm run start

## Start the frontend server:
-- npm run dev


Once both servers are running, you can access the application in your web browser:
-- Frontend: http://localhost:3000
-- Backend: Running on port 8002

## Features
-- Transaction Tracking: Users can easily store their transactions, including credits and debits.
-- Graphical Representation: The application provides visual representation of credited transactions through charts.


Feel free to explore and customize the application further according to your needs!