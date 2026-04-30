var nome = "SONIC"
var vida = 10;
var moeda = 0;
var dano = 5;

function mostrarPersonagem{
    document.getElementById("ficha").innerHTML = `
        <h1> ${nome} </h1>
        <p> ${vida} </p>
        <p> ${moeda} </p>
        <p> ${dano} </p>
    `;
}

mostrarPersonagem();