const express = require("express");//importa modulo express
const path = require("path");

const app = express();//instancia uma referencia do express no projeto
const port = 3000;

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
    res.send("Hello world");
});

app.get("/index", (req, res) => {
    res.render("index", { titulo: "Primeira interpolação" });
});


//liga o servidor na porta 3000
app.listen(port, () => console.log(`Servidor rodando em http://localhost:${port}`));
