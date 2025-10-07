const express = require("express") //pacotes a serem utilizados
const router = express.Router()
const cors = require("cors")
router.use(cors)

const dbKenx = require("./data/db_config") //dados de conexão com  o banco de dados

//método get é usado para consulta
router.get("/", async (req, res) => {
    try {
        // para obter livros pode utilizar o .select().orderBy() ou apenas .orderBy()
        const livros = await dbKenx("livros").orderBy("id", "desc")
        res.status(200).json(livros) // retorna statusCode ok e os dados
    } catch (error) {
        res.status(400).json({ msg: error.message }) // retorna o statusCode de erro e msg
    }
})

//método post é usado para inclusão
router.post("/", async (req, res) => {
    // faz a desestruturação dos dados recebidos no corpo da requisição
    const { titulo, autor, ano, preco, foto } = req.body

    // se alguns dos campos não foi passado, irá enviar uma mensagem de erro e retornar
    if (!titulo || !autor || !ano || !preco || !foto) {
        res.status(400).json({ msg: "Enviar titulo, autor, ano, preco e foto do livro" })
        return
    }

    // caso ocorra algum erro na inclusão, o programa irá captura esse erro (catch)
    try {
        //insert faz a inserção de livros na tabela (e retorna o id do registro inserido)
        const novo = await dbKenx("livros").insert({ titulo, autor, ano, preco, foto })
        res.status(201).json({ id: novo[0] }) //statusCode indica create
    } catch (error) {
        res.status(400).json({ msg: error.message }) //retorna status de erro e mensagem
    }
})

//método put indica alteração. id indica o registro a ser alterado
router.put("/:id", async (req, res) => {
    const id = req.params.id // ou const { id } = req.params
    const { preco } = req.body //campo a ser alterado

    try {
        //altera o campo preco, no registro cujo id coincidir com o parâmetro passado
        await dbKenx("livros").update({ preco }).where("id", id) //ou .where({ id })
        res.status(200).json() //statusCode indica ok
    } catch (error) {
        res.status(400).json({ msg: error.message }) //retorna status de erro e msg
    }
})

//método delete é usado para exclusão
router.delete("/:id", async (req, res) => {
    const { id } = req.params //id do registro a ser excluidoad
    try {
        await dbKenx("livros").del().where({ id })
        res.status(200).json()
    } catch (error) {
        res.status(400).json({ msg: error.message })
    }
})

//filtro por titulo ou autor
router.get("/filtro/:palavra", async (req, res) => {
    const palavra = req.params.palavra //palavra do título ou autor a pesquisar
    try {
        // para filtrar registros, utiliza-se .where(), com sua variantes
        const livros = await dbKenx("livros")
        .where("titulo", "like", `%${palavra}%`)
        .orWhere("autor", "like", `%${palavra}%`)
        res.status(200).json(livros) //retorna statusCode e os dados
    } catch (error) {
        res.status(400).json({ msg: error.message })
    }
})

//resumo do cadastro de livros
router.get("/dados/resumo", async (req, res) => {
    try {
        //métodos que pode ser utilizados para obtenção de dados estatísticos da tabela
        const consulta = await dbKenx("livros")
        .count({ num: "*" })
        .sum({ soma: "preco"})
        .max({ maior: "preco" })
        .avg({ media: "preco" })
        const { num, soma, maior, media } = consulta[0]
        res.status(200).json({ num, soma, maior, media: Number(media.toFixed(2)) })
    } catch (error) {
        res.status(400).json({ msg: error.message })
    }
})

//soma dos preços, agrupados por ano
router.get("/dados/grafico", async (req, res) => {
    try {
        //obtém ano e soma do preço dos livros (com nome e total), agrupados por ano
        const totalPorAno = await dbKenx("livros").select("ano")
        .sum({ total: "preco" }).groupBy("ano") 
        res.status(200).json(totalPorAno)
    } catch (error) {
        res.status(400).json({ msg: error.message })
    }
})

module.exports = router
