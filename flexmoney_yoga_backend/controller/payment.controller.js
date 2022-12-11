const express = require('express')
const db = require('../model/database')


const payment = async (req, res) => {
    try {

        let {
            uid,
            card_no,
            amt,
            cvv
        } = req.body

        let sql = `SELECT card_no FROM flex_payment WHERE uid='${uid}'`

        db.query(sql, (err, result) => {

            if (err) {
                res.json({
                    message: err.message
                })
            } else {
                if (result.length > 0) {
                    res.json({
                        message: "Success"
                    })
                } else {
                    let sql = `INSERT INTO flex_payment (uid , card_no,amt,cvv) VALUES ('${uid}','${card_no}','${amt}','${cvv}') `
                    db.query(sql, (err, result) => {
                        if (err) {
                            res.json({
                                message: err.message
                            })
                        } else {
                            res.json({
                                message: "Success"
                            })
                        }
                    })
                }
            }
        })

    } catch (error) {
        res.json({
            message: error.message
        })
    }
}

module.exports = payment