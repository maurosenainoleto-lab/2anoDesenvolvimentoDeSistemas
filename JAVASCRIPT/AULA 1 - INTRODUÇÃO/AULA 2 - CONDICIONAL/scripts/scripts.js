var nome = "SONIC"
var vida = 10;
var moeda = 0;
var dano = 5;
var icon = "IMAGES/SONIC VITORIA.gif"

function mostrarPersonagem() {
    document.getElementById("ficha").innerHTML = `
    <img src='${icon}' id='icone' alt=''>
        <h1> ${nome} </h1>
        <p>❤️ ${vida} </p>
        <p>🪙 ${moeda} </p>
        <p>⚔️ ${dano} </p>
        <p>⬆️ tranform </p>
    `;
}

document.getElementById("vida").addEventListener("click", addVida)
function addVida() {
    vida++;
    mostrarPersonagem();
};

document.getElementById("moeda").addEventListener("click", addMoeda)
function addMoeda() {
    moeda++;
    mostrarPersonagem();
};

document.getElementById("dano").addEventListener("click", addDano)
function addDano() {
    var arma = prompt('Qual arma o SONIC está segurando? (MAISC)');
    // escolha (var)
    switch(arma){
        case "LUVAS":
            alert("Voce selecionou luvas : 5 dano");
            dano = 5;
            break;
        case "ESMERALDA DO CÁOS":
            alert("Voce selecionou esmeralda do cáos! 10 dano");
            dano = 10;
            break;
        default:
            alert("Arma não encontrada! Tente novamente");          
    }
    dano++;
    mostrarPersonagem();
};

document.getElementById("tranform").addEventListener("click", addTranform)
function addTranform() {
    icon = "IMAGES/SUPER SONIC.gif"
    dano = dano *10
    mostrarPersonagem();
};

mostrarPersonagem();