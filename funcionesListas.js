function imprimirPrimerElemento(array){
    console.log('Primer elemento del array: ' + array[0]);
}

function imprimirTodoElemento(array){
    for (let i = 0; i < array.length; i++){
        console.log(`Elemento ${i+1}: ${array[i]}`);
    }
}

function imprimirParametros(miObjeto){
    arrayAtributos = Object.values(miObjeto);
    for (let i = 0; i < arrayAtributos.length; i++){
        console.log(`Valor objeto ${i+1}: ${arrayAtributos[i]}`);
    }
}


let frutas = ['Manzana', 'Mango', 'Cereza'];
let carro = {
    modelo: 1991,
    marca: 'Lambo',
    color: 'Rojo',
}

imprimirPrimerElemento(frutas);
imprimirTodoElemento(frutas);
imprimirParametros(carro);