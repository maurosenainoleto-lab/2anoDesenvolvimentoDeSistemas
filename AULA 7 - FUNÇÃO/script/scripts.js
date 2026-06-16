// SEM return - calcular mas perde o valor
function calcularSem(preco, desconto) {
    var total = prco - (preco * desconto/100);
}

// COM return - devolve o valo calculado

function calcularCOM(preco, desconto) {
    var total = preco - (preco * desconto/100);
    return total;
}

function testarSemReturn() {
    var resultado = calcularSem(100, 50);
    document.getElementById('resultado').innerHTML = 
    '<div class="alert alert-danger">'+
    'Resultado: ' + resultado +
    '('
}