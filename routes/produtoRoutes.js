const router = require("express").Router()
const Produto = require("../models/Produto")

router.post("/", async (req, res) => {
    // Serão atribuidos no corpo da requisição
    const {nome, descricao, fotoS3, estoque, preco} = req.body
    const produto = {nome, descricao, fotoS3, estoque, preco}

    try {
        // Criando os dados
        await Produto.create(produto)
        res.status(201).json({message: "Produto cadastrado com sucesso"})
    } catch (error) {res.status(500).json({message: "Erro ao cadastrar o produto"})}
})

// Leitura de dados (Verbo GET)
// Leitura total
router.get("/", async (req, res) => {
    try {
        const produtos = await Produto.find()
        res.status(200).json(produtos)

    } catch (error) {res.status(500).json({error: error})}
})

// Leitura especifica
router.get("/:id", async (req, res) => {
    // Extrair o id da requisição pela url
    const id = req.params.id

    try {
        const produto = await Produto.findOne({_id: id})
        res.status(200).json(person)

    } catch (error) {res.status(500).json({error: error})}
})

// Update de dados (Verbo PATCH)
router.patch('/produto/:id', async (req, res) => {
    // Extrair o id da requisição pela url
    const id = req.params.id

    const {nome, descricao, fotoS3, estoque, preco} = req.body
    const produto = {nome, descricao, fotoS3, estoque, preco}

    try {
        const updatedProduto = await Produto.updateOne({_id: id}, produto)

        if (updatedProduto === 0) {
            res.status(422).json({message: "Produto não encontrado."})
            return
        }

        res.status(200).json(person)
    } catch (error) {
        res.status(500).json({erro: error})
    }
})

// Deletar dados (Verbo DELETE)
router.delete('/person/:id', async (req, res) => {
    const id = req.params.id

    const produto = await Produto.findOne({_id: id})

    if (!produto) {
        res.status(422).json({message: "Produto não encontrado."})
        return
    }

    try {
        await Person.deleteOne({_id: id})

        res.status(200).json({ message: "Produto removido com sucesso!"})
    } catch (error) {
        res.status(500).json({erro: error})
    }
})

module.exports = router