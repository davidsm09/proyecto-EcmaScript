const anotherFuncion = () => {
    return new Promise((resolve, reject) => {
        if (false) {
            resolve("hey!!");
        } else {
            reject ( "whooooops!");
        }
    })
}

anotherFuncion()
.then(response => console.log(response))
.catch(err => console.log(err))
.finally(() => console.log("finally"));


//Asincronismo para iteraciones

async function* anotherGenerator() {
    yield await Promise.resolve(1);
    yield await Promise.resolve(2);
    yield await Promise.resolve(3);
}

const other = anotherGenerator();
other.next().then(response => console.log(response.value));
other.next().then(response => console.log(response.value));
other.next().then(response => console.log(response.value));
console.log("hello");

async function arrayOfNames(array) {
    for await (let value of array) {
        console.log(value);
    }
}

const names =arrayOfNames(["Alexa", "Oscar", "David"]);
console.log("After");