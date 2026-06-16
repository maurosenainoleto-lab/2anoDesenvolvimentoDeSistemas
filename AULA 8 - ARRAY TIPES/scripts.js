// Exemplo 1: Declarando e inicializando uma array vazio
console.log('\n---Exemplo 1: Array Vazio');
let meuArrayVazio = []
console.log(meuArrayVazio)

// Exemplo 2: Declarando arrays com elementos
console.log('\n-Exemplo 2: Arrays com Elementos');
let frutas = ['Maçã', 'Banana', 'Laranja', 'Uva'];
let numeros = [10, 20, 30, 40, 50];
let misto = ['Texto', 123, true, null];
console.log ('Frutas', frutas);
console.log ('Números', numeros);
console.log ('Misto', misto);

// Exemplo 3: Acessando elementos de um Array
console.log('\n- Exemplo3: Acessado elementos por índice');
console.log('Primeira fruta:', frutas[0]);
console.log('Terceiro número:', numeros[2]);

// Exemplo 4: Modificando elementos de um array
console.log('\n-Exemplo 4: Modificando elementos');
frutas[1] = 'Pera';
console.log('Frutas modficadas', frutas);// é apenas: console.log(frutas)

// Exemplo 5: Tamanho do array
console.log('\n-Exemplo 5: Tamanho dos arrays');
console.log('Tamanho do array de frutas:', frutas.length);
console.log('Tamanho do array de números:', numeros.length);

// Exemplos 6: Adicionando elementos ao final (push)
console.log('\n-Exemplo6: Adiconando elemntos com push');
frutas.push('Manga');
console.log('Frutas após o push', frutas);
 