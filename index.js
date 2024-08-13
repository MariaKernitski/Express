const express = require("express");
const app = express();
const port = 5000;

app.use(express.json());

app.get("/:usuario/:repositorio", (req, res) => {
    //URL
    console.log("antes do ?:", req.params.usuario, req.params.repositorio);
    console.log("depois do ?:", req.query.id, req.query.idade);
    console.log("corpo da requisição", req.body);
    res.send("Esfriou!");
})

app.listen(port, () => {
    console.log("Conexão estabelecida com sucesso na porta: " + port);
})