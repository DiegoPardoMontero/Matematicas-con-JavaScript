let name = "Diego";
let apellido = "Pardo";
let nickname = "Dpardo";

function saludarPorApodo(name, apellido, nickname){
    let completeName = name + " " + apellido;
    console.log('Mi nombre es ' + completeName + ' pero prefiero que me digas ' + nickname + '.');
}

saludarPorApodo(name, apellido, nickname);