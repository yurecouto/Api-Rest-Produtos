const router = require("express").Router()
const Pedido = require("../models/Pedido")

router.post("/", async (req, res) => {
    // Serão atribuidos no corpo da requisição
    const {produto, quantidade, subtotal} = req.body
    const pedido = {produto, quantidade, subtotal}

    try {
        // Criando os dados
        await Pedido.create(pedido)
        res.status(201).json({message: "Pedido cadastrado com sucesso"})
    } catch (error) {res.status(500).json({message: "Erro ao cadastrar o pedido"})}
})

// Leitura de dados (Verbo GET)
// Leitura total
router.get("/", async (req, res) => {
    try {
        const pedidos = await Pedido.find()
        res.status(200).json(pedidos)

    } catch (error) {res.status(500).json({error: error})}
})

// Leitura especifica
router.get("/:id", async (req, res) => {
    // Extrair o id da requisição pela url
    const id = req.params.id

    try {
        const pedido = await Pedido.findOne({_id: id})
        res.status(200).json(person)

    } catch (error) {res.status(500).json({error: error})}
})

// Update de dados (Verbo PATCH)
router.patch("/:id", async (req, res) => {
    // Extrair o id da requisição pela url
    const id = req.params.id

    const {produto, quantidade, subtotal} = req.body
    const pedido = {produto, quantidade, subtotal}

    try {
        const updatedPedido = await Pedido.updateOne({_id: id}, pedido)

        if (updatedPedido === 0) {
            res.status(422).json({message: "Pedido não encontrado."})
            return
        }

        res.status(200).json(pedido)
    } catch (error) {
        res.status(500).json({erro: error})
    }
})

// Deletar dados (Verbo DELETE)
router.delete('/pedidos/:id', async (req, res) => {
    const id = req.params.id

    const pedido = await Pedido.findOne({_id: id})

    if (!pedido) {
        res.status(422).json({message: "Pedido não encontrado."})
        return
    }

    try {
        await Person.deleteOne({_id: id})

        res.status(200).json({ message: "Pedido removido com sucesso!"})
    } catch (error) {
        res.status(500).json({erro: error})
    }
})

module.exports = router