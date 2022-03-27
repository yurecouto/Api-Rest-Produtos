const express = require('express')
const mongoose = require('mongoose')
const app = express()

app.use(
    express.urlencoded({
        extended: true,
    }),
)
app.use(express.json())

// rotas
const produtoRoutes = require("./routes/produtoRoutes")
const pedidoRoutes = require("./routes/pedidoRoutes")
app.use("/produtos", produtoRoutes)
app.use("/pedidos", pedidoRoutes)

// rota inicial e endpoint
app.get('/', (req, res) => {
    res.json({message: "Deu certo"})
})

// Entregar uma porta
mongoose
    .connect(`mongodb+srv://yure:eureka@cluster0.n9flo.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`)
    .then(() => {
        console.log("Conectado ao MongoDB.")
        app.listen(3000)
    })

    .catch((err) => console.log(err))