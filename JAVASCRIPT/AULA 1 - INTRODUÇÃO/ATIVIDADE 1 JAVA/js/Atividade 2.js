confirm("Atividade 2");
var num = Number(prompt("Digite um número:"));

document.getElementById("resposta2").innerHTML = `<h1>antecessor dele é ${num - 1} e o sucessor é ${1 + num}</h1>`;