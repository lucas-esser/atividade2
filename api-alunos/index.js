const express = require('express')
const fs = require('fs')

const app = express()
app.use(express.json())

app.get('/', (req, res) => {
    res.send('API de Alunos rodando com sucesso!')
})

app.get('/alunos', (req, res) => {
    fs.readFile('alunos.json', 'utf-8', (err, dados) => {
        if (err) {
            return res.status(500).json({
                erro: 'Erro ao ler a base de dados.'
            })
        }
        const listaAlunos = JSON.parse(dados)
        res.json(listaAlunos)
    })
})
app.get('/alunos/:id', (req, res) => {
    const idBuscado = req.params.id
    fs.readFile('alunos.json', 'utf-8', (err, dados) => {
        if (err) return res.status(500).json({ erro: 'Erro no servidor.' })
        const alunos = JSON.parse(dados)
        const alunoEncontrado = alunos.find(aluno => aluno.id == idBuscado)
        if (!alunoEncontrado) {
            return res.status(404).json({ erro: 'Aluno não encontrado.' })
        }
        res.json(alunoEncontrado)
    })
})

app.post('/alunos', (req, res) => {
    const novoAluno = req.body
    fs.readFile('alunos.json', 'utf-8', (err, dados) => {
        if (err) return res.status(500).json({ erro: 'Erro ao ler os dados.' })
        const alunos = JSON.parse(dados)
        alunos.push(novoAluno)
        fs.writeFile('alunos.json', JSON.stringify(alunos, null, 2), (err) => {
            if (err) return res.status(500).json({ erro: 'Erro ao salvar o novo aluno.' })

            res.status(201).json({ mensagem: 'Aluno cadastrado com sucesso!' })
        })
    })
})
app.delete('/alunos/:id', (req, res) => {
    const idParaRemover = req.params.id
    fs.readFile('aluno.json', 'utf-8', (err, dados) => {
        if (err) return res.status(500).json({ erro: 'Erro no servidor'})
            
            const alunos = JSON.parse(dados)
            const listaFiltrada = alunos.filter(aluno => aluno.id != idParaRemover)
            
    })

    app.listen(3000, () => {
        console.log('Servidor rodando em http://localhost:3000')
    })
