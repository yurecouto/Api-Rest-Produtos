const mongoose = require("mongoose")
const { Schema } = mongoose

const produtoSchema = Schema ({
    _id: Schema.Types.ObjectId,
    nome: String,
    descricao: String,
    fotoS3: String,
    estoque: Number,
    preco: Number,
})


const Produto = mongoose.model('produto', produtoSchema)
module.exports = Produto