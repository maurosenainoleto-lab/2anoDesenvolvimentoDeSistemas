function aula(){
    // variável <- vetor de [1..3] de caractere
    var filmes = [
        "Interestelar",
        "Meninas Malvadas",
        "Diabo Veste Prada 2",
    ];
    
    console.log(filmes);
    console.log("Um filme que já foi muito famoso é: ", filmes[0]);

    // adiciona no ultimo
    filmes.push("As branquelas");
    console.log(filmes)

    // adiciona no primeiro
    filmes.unshift("Homen Aranha");
    console.log(filmes)

    // deleta o ultimo
    filmes.pop();
    console.log(filmes)

    // deleta o primeiro
    filmes.shift();
    console.log(filmes)

    // SPLICE (indice, quantos quer sobrescrever, dados)
    filmes.splice(1, 1);
    console.log(filmes)

    filmes.splice(1, 1, "Diabo Veste Prada 1");
    console.log(filmes)

    filmes.splice(1, 0, "Kill Bill vol 1 e vol 2");
    console.log(filmes)
    

    var filmesCopia = filmes.slice();
    console.log()

    for(var i = 0; i < filmes.length; i++){
        console.log(filmes[i]);
    }

    filmes.map( cadafilme => {
        console.log(filme);
    });
}

var doces = [
    ['Saco de pirulitos', 'https://jadoces.com.br/wp-content/uploads/2023/09/bob-pirulito-blong-28-melancia-672g_06fa6681d3debf075f95575d590cf09b.png.webp', 30],
    ['Sonho de valsa', 'https://images.tcdn.com.br/img/img_prod/1225570/sonho_de_valsa_20g_unidade_1677_1_79762930ee3ce201b3e1f8574cf0ba1a.png', 2.5],
    ['Bis', 'https://americanas.vtexassets.com/arquivos/ids/36866881-768-auto/Novo%20Projeto.webp?v=638956309725770000&quality=9', 23.99],
    ['Talento', 'https://cdn.awsli.com.br/1000x1000/1356/1356487/produto/91719540/7b07309919.jpg', 10.50],
];

doces.map( cadaDoce => {
    document.getElementById("produtos").innerHTML += `
     <div class="produto">
            <img src=" ${cadaDoce[1]}" alt="Pirulito">
            <h1>${cadaDoce[0]}</h1>
            <p>R$ ${cadaDoce[2]}</p>
            <button type="button">Comprar</button>
    </div>
    `
});