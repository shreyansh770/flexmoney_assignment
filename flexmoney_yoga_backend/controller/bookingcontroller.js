const express = require('express')
const db = require('../model/database')


const booking = async (req, res) => {
    try {

        let {
            uid,
            date,
            batch
        } = req.body

        let sql = `SELECT date FROM flex_batch WHERE uid='${uid}'`

        db.query(sql, (err, result) => {
            if (err) {
                res.json({
                    message: err.message
                })
            } else {

                if (result.length > 0) {

                    // has previous booking

                    let prevDate = result[0].date.split("-")

                    let m1 = prevDate[1];
                    let y1 = prevDate[2];

                    let currDate = date.split("-")

                    let m2 = currDate[1];
                    let y2 = currDate[2];

                    if (m1 == m2 && y1 == y2) {
                        res.json({
                            message: "Your slot is already booked for this month"
                        })
                    } else {

                        let sql = `UPDATE flex_batch SET date='${date}' , batch='${batch}' WHERE uid='${uid}'`
                        db.query(sql, (err, result) => {
                            if (err) {

                            } else {

                                res.json({
                                    message: "Booking completed"
                                })
                            }
                        })
                    }


                } else {

                    //new user

                    let sql = `INSERT INTO flex_batch (uid , date , batch) VALUES ('${uid}','${date}','${batch}')`
                    db.query(sql, (err, result) => {
                        if (err) {

                        } else {

                            res.json({
                                message: "Booking completed"
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

module.exports = booking