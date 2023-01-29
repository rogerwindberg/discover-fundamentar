const express = require('express')
const app = express();

app.set('view engine', 'ejs');

app.get('/', function (request, response) {
    const items = [
        {
            title: "D",
            message: "esenvolver aplicações/serviços de forma fácil"
        },
        {
            title: "E",
            message: "JS usa JavaScript para renderizar HTML"
        },
        {
            title: "M",
            message: "uito fácil de usar"
        },
        {
            title: "A",
            message: "morzinho"
        },
        {
            title: "I",
            message: "nstall ejs"
        },
        {
            title: "S",
            message: "how de bola"
        },
    ];

    const subtitle = "Uma linguagem de modelagem para criação de páginas HTML utilizando JS"

    response.render('pages/index', {
        qualitys: items,
        subtitle: subtitle,
    });
})

app.get('/sobre', function (request, response) {
    response.render('pages/about');
})

app.listen(8080);
console.log("Rodando...");