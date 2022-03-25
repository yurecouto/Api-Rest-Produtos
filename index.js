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
app.use("/produtos", produtoRoutes)

// rota inicial e endpoint
app.get('/', (req, res) => {
    res.json({message: "Deu certo"})
})

// zx5hstGXO0kIRth4
// Entregar uma porta
mongoose
    .connect(`mongodb+srv://yure:zx5hstGXO0kIRth4@api-cadastro-produto.w05ud.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`)
    .then(() => {
        console.log("Conectado ao MongoDB.")
        app.listen(3000)
    })

    .catch((err) => console.log(err))