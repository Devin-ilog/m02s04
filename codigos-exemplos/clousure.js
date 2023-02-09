const contador = function () {
    let cont = 0;

    return {
        add: function () {
            cont += 1;
        },
        remove: function() {
            if (cont < 1) {
                return;
            }
            cont -= 1;
        },
        showContador: function () {
            console.log(cont);
        }
    }
}

const meuContador = contador();
meuContador.showContador();
meuContador.add();
meuContador.add();
meuContador.add();
meuContador.showContador();
meuContador.remove();
meuContador.remove();
meuContador.remove();
meuContador.remove();
meuContador.remove();
meuContador.showContador();

const outroContador = contador();
outroContador.add();
outroContador.showContador();
meuContador.showContador();

function add(x) {
    return function (y) {
        console.log(x + y);
    }
}

const add5 = add(5);
add5(3);
add5(5);

