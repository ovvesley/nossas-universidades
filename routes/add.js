/**
 * This module is responsible for managing the add Universidade.
 * 
 *
 * @file
 * @module
 * @author Wesley Ferreira <ovvesley@gmail.com>
 */
var express = require("express");

var Universidade = require("../models/Universidade");

const router = express.Router();

router
    .route("/")
    .get((req, res) => {
        res.statusCode = 404;
        return res.json({
            error: "not found",
            msg: "Endpoint não disponível",
        });
    })
    .post(async (req, res, next) => {
        try {
            let data = req.body
            console.log(data)
            let universidade = await Universidade.create({ ...data })
            return res.json(universidade);
        } catch (error) {
            res.statusCode = 500;
            return res.json({
                error: error,
                msg: error.statusCode,
            });
        }
    })
    .put((req, res) => {
        res.statusCode = 404;
        return res.json({
            error: "not found",
            msg: "Endpoint não disponível",
        });
    })
    .delete((req, res) => {
        res.statusCode = 404;
        return res.json({
            error: "not found",
            msg: "Endpoint não disponível",
        });
    });

module.exports = router;
