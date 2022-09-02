function* iterate(array)  {
    for (let value of array) {
        yield value;
    }
}

const it = iterate(["Oscar", "Alexa", "David", "Gerlis"]);
console.log(it.next().value);//Respuesta: Oscar
console.log(it.next().value);//Respuesta: Alexa
console.log(it.next().value);//Respuesta: David
