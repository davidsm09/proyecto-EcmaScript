//2 tipos de expreciones que trabajan con arrays o objetos

//desestructuracion de arrays

let frutas = ['manzana', 'banana'];
//se trabaja mejor asignando los valores del array que queremos obtener
//nos permitira obtenerlos y utilizarlos
let [a,b] = frutas;

//obtener los valores buscando su posicion es mas tedioso
//ya que si tenemos un array muy grande no podremos conocer las ubicaciones esoecificas de cada valor

console.log(a, frutas[1]);

//desestructuracion en objetos

let user = {username: 'david', age: 25};
let {username, age} = user;
console.log(username, age);

/* Resumen!
Asignación de Desestructuración
la Desestructuración permite desarmar 
objetos y asignarle a cada elemento una variable distinta
ejemplo:

Asignación de Desestructuración
la Desestructuración permite desarmar 
objetos y asignarle a cada elemento una variable distinta */