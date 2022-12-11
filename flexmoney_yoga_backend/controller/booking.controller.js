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
                    let d = new Date()
                    let month = d.getMonth()
                    let year = d.getFullYear()

                    // compare date

                    // if user is trying to register again in same month alert them

                    // if month is different update tha changes

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