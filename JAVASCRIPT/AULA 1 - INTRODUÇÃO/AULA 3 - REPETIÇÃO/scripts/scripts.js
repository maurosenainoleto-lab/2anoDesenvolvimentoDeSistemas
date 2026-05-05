function aula() {
    //enquanto () faca...
    //para con ate con2 interable
    var i = 0;

    while (i < 10) {
        console.log(i)
        i++;
    }

    while (true) {
        var pergunta = confirm("Repete? ");

        if (pergunta == false) {
            break;
        }
    }
    for (var i; i < 2000; i++) {
        document.querySelector('main').innerHTML += `
        <p> O SENAI É BRITA </p>
        `;
    }

    do {
        console.log(i);
        i++
    } while (i > 10);

}