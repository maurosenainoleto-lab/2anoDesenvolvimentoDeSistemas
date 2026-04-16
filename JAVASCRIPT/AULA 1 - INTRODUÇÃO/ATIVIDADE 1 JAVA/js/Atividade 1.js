confirm("Atividade 1:");
var conta = Number(prompt("Digite o valor da conta:"));
var clientes = Number(prompt("Quantos pessoas tem na mesa?"));

document.getElementById("resposta1").innerHTML = `<h1>Cada pessoa ficará R$${conta / clientes} com ${clientes} clientes</h1>`;