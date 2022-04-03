// função com parametros
let corSite = "azul"
function resetaCor (cor) {
    corSite = cor;
};

console.log(corSite);
resetaCor("vermelho");
console.log(corSite);

// exemplo de função com parametro
function soma (a, b) {
  return a + b
}

console.log(soma(1, 5));

// exemplo de função com um parametro

function drinkCoffee (coffee) {
    if (coffee == null) {
        console.log("You need to make a Coffee")
    } else if (coffee == "fill") {
        console.log('It just drink!')
    }
}

drinkCoffee();