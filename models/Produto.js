const mongoose = require("mongoose")

const Produto = mongoose.model("Produto", {
    nome: String,
    descricao: String,
    fotoS3: String,
    estoque: Number,
    preco: Number,
})

module.exports = Produto