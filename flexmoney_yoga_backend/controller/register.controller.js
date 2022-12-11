const express = require('express')
const db = require('../model/database')
const {
    v4: uuidv4
} = require('uuid');


const register = async (req, res) => {
    try {

        let {
            email,
            age,
            name,
        } = req.body



        let uid = uuidv4()

        let sql = `SELECT uid FROM flex_user WHERE email ='${email}'`

        db.query(sql, (err, result) => {
            if (err) {
                res.json({
                    message: err.message
                })
            } else {
                if (result.length > 0) { // user exist

                    res.json({
                        message: {
                            message: "User registered",
                            uid: result[0].uid
                        }
                    })
                } else {
                    // new user

                    if (age >= 18 && age <= 65) {
                        let sql = `INSERT INTO flex_user (uid , name , email , age) VALUES ('${uid},'${name}','${email}','${age}')`

                        db.query(sql, (err, result) => {
                            if (err) {
                                res.json({
                                    message: err.message
                                })
                            } else {
                                res.json({
                                    message: {
                                        message: "User registered",
                                        uid: uid
                                    }
                                })
                            }
                        })

                    } else {
                        res.json({
                            message: "Your age should be between 18 to 65"
                        })
                    }


                }
            }
        })

    } catch (error) {
        res.json({
            message: error.message
        })
    }
}



module.exports = register