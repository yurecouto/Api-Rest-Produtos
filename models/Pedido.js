const mongoose = require("mongoose")
const { Schema } = mongoose

const pedidoSchema = Schema ({
    produto: {type: Schema.Types.ObjectId, ref: 'Produto'},
    quantidade: Number,
    subtotal: Number
})

const Pedido = mongoose.model('pedido', pedidoSchema)
module.exports = Pedido