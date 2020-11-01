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
    .get(async(req, res) => {
        console.log(req.query)
        let { regiao } = req.query;
        console.log(regiao)
        try {
            let result = await Universidade.find({ regiao }).lean();
            res.json(result)
        } catch (error) {
            res.statusCode = 500;
            return res.json({
                error: error
            });
        }
    })
    .post((req, res, next) => {
        return res.json({
            error: "not found",
            msg: "Endpoint não disponível",
        });
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