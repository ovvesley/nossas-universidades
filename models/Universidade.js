/**
 * Module Universidades schemas
 * @module 
 * @author Wesley Ferreira
 */
const mongoose = require("mongoose");

/**
 * UniversidadeSchema schema
 * @class Universidade
 */

const UniversidadeSchema = new mongoose.Schema({
    nome: {
        type: String,
        trim: true,
        unique: true,
        required: true,
    },
    descricao: {
        type: Number,
        default: 0,
    },
    imagemPrincipal: {
        type: String,
        default: "",
    },
    imagens: {
        type: Array,
    },
    cursos: {
        type: Array
    },
    UF: {
        type: String,
        required: true
    },
    regiao: {
        type: Number,
        required: true
    }
});

var Universidade = mongoose.model("Universidade", UniversidadeSchema);


module.exports = Universidade;
