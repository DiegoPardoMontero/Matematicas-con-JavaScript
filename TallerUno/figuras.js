//Código del cuadrado

console.group("Cuadrados");
const ladoCuadrado = 5;
console.log('Los lados del cuadrado miden: ' + ladoCuadrado + "cm");

const perimetroCuadrado = ladoCuadrado * 4;
console.log('El perímetro del cuadrado mide: ' + perimetroCuadrado + "cm");

const areaCuadrado = ladoCuadrado * ladoCuadrado;
console.log('El área del cuadrado es: ' + areaCuadrado + "cm2");
console.groupEnd();


//Código de triángulo

console.group("Triangulos");
const ladoTriangulo1 = 6;
const ladoTriangulo2 = 4;
const ladoTriangulo3 = 5;
const baseTriangulo = 4;

console.log(
    'Los lados del triángulo miden: ' 
    + ladoTriangulo1 
    + 'cm, '    
    + ladoTriangulo2 
    + 'cm, ' 
    + ladoTriangulo3 
    + 'cm'
);

const alturaTriangulo = 5.5;
console.log('La altura del triángulo es de: ' + alturaTriangulo + 'cm');

const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + ladoTriangulo3;
console.log('El perímetro del triángulo es: ' + perimetroTriangulo + 'cm');

const areaTriangulo = (baseTriangulo * alturaTriangulo)/2;
console.log('El área del triángulo es: ' + areaTriangulo + 'cm2');

console.groupEnd();

//Código del círculo

console.group("Círculos");

//Radio
const radioCirculo = 4;
console.log('El radio del círculo es: ' + radioCirculo + 'cm');

//Diámetro
const diametroCirculo = radioCirculo * 2;
console.log('El diámetro del círculo es: ' + diametroCirculo + 'cm');

//PI
const PI = Math.PI;
console.log('PI es: ' + PI);

//Circunferencia
const perimetroCirculo = diametroCirculo * PI;
console.log('El perímetro del círculo es: ' + perimetroCirculo + 'cm');

//Área
const areaCirculo = PI * (radioCirculo * radioCirculo);
console.log('El área del círculo es:' + areaCirculo + 'cm2');

console.groupEnd;