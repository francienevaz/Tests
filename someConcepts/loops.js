// For
// Imprimir números ímpares

for (let i = 0; i <= 5; i++) {
    if( i % 2 !== 0) {
        console.log(i)
    }
}

// Imprimir números pares

for (let i = 0; i <= 5; i++) {
    if( i % 2 == 0) {
        console.log(i)
    }
}

// Para contar de trás pra frente

for (let i = 5; i >= 1; i--) {
    console.log(i)
}
 // While

//let i = 5;

 while (i <= 5) {
        if( i % 2 !== 0) {
            console.log(i)
    }
 }

 // Do ... while

 let i = 1;

 do {
     console.log('digitando...');
     i++;
 } while (i < 5)

 // for in

 const pessoa = {
     nome: 'Lucas',
     idade: 25
 };

 for(let chave in pessoa) {
     console.log(chave);
 }

 const cores = ['Vermelho', 'Azul', 'Verde']

 for (let indice in cores) {
     console.log(indice, cores[indice])
 } 
