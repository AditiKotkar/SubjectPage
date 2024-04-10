const express = require('express');
const app = express();
const mysql = require('mysql');
const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "subjects",
});

connection.connect( err => {
    if (err) {
        console.error('Error connecting to mysql database'+ err.stack);
        return;
    }
    console.log('Connected to MySql database');
});

app.get('/introduction', (req, res) => {
    connection.query('SELECT Introduction FROM RomanNumerals', (err, result) => {
        if(err) throw err;
        res.send(result[0].Introduction);
        return;
    });
});
app.get('/rules', (req, res) => {
    connection.query('SELECT Rules FROM RomanNumerals', (err, result) => {
        if(err) throw err;
        res.send(result[0].Rules);
        return;
    });
});
app.get('/set1', (req, res) => {
    connection.query('SELECT set1 FROM RomanNumerals', (err, result) => {
        if(err) throw err;
        res.send(result[0].set1);
        return;
    });
});

const PORT = process.env.PORT || 3002;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});



