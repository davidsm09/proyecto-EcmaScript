
var lastname = 'Gonzalo';
lastname = 'David';
console.log(lastname);

let fruta = 'manzana';
fruta = 'pera';
console.log(fruta);

const animal = 'gato'
animal = 'perro'
console.log(animal);

/* las palabras reservadas var y let 
nos permite reasignar el valor de una variable
la palabra reservada const no permite esta accion */


//SCOPE de: var, let, const.

const frutas = () => {
    if (true) {
        var fruta1 = 'coco';  //Var tiene scope dentro de la funcion
        let fruta2 = 'mandarina';//let tiene scope dentro del bloque donde es asignada o inicializada
        const fruta3 = 'sandia';//const tiene scope dentro del bloque donde es asignada o inicializada
    }
    console.log(fruta1);
    console.log(fruta2);
    console.log(fruta3);
}
frutas();