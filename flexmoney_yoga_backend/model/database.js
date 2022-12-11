const express = require('express');
require('dotenv/config')
const mysql = require('mysql')
const PASSWORD = process.env.PASSWORD
const USER = process.env.USER
const HOST = process.env.HOST
const DB_NAME = process.env.DB_NAME


const db = mysql.createPool({
    host: HOST,
    user: USER,
    password: PASSWORD,
    port: '3306',
    database: DB_NAME,
    multipleStatements: true
})

let select = `SELECT COUNT(*) AS count FROM ${mysql.escapeId('application.table')}`

db.query(select)

db.getConnection((err) => {
    if (err) {
        console.log(err.message);
        console.log("Connection failed");
    } else {
        console.log("Connection successfull");
    }
})

module.exports = db;