// resposta no console
console.log("Olá Mundo")

// caixas de dialogo 
alert("FRONT É A MATÉRIA MAIS TOP")
prompt("Qual o seu nome?")
confirm("Você faria um pix para seu colega?")

// caixas de díalogo
// ("FRONT É A MATÉRIA MAIS TOP")
// ("Qual o seu nome?")
// ("Você faria um pix para seu colega?")

// Acessa documento, busca o elemento com o id selecionado
// inner = dentro
document.getElementById("resposta"). innerText = "<h1>QUE LEGAL</h1>"
document.getElementById("resposta"). innerHTML = "<h1>QUE LEGAL</h1>"

// string - caractere ("Mauro")
var nome = "Mauro";
// boolean - logico ("verdadeiro" - true, "falso" - false)
var ligado = true;
// number - número (80)
// *obs para numeros quebrados - float()
// *obs para numeros inteiros - int()
var idade = 23;
var dinheiro = 100.50;

// array - lista , vetor
var listaCompras = []

console.log(typeof(nome));
console.log(typeof(ligado));
console.log(typeof(idade));
console.log(typeof(dinheiro));
console.log(typeof(listaCompras));