const fnAsync = () => {
    return new Promise((resolve, reject) => {
        (true)
        ? setTimeout(() => resolve ("AsynC!!"), 2000)
        : reject(new Error("Error"));
    });
}

const anotherFn = async () => {
    const somethig = await fnAsync();
    console.log(somethig);
    console.log("Hello");
}

console.log("before");
anotherFn();
console.log("After");

/* El término asíncrono se refiere a una situación en la que dos o más eventos no ocurren al mismo tiempo.
 O en términos más sencillos, pueden suceder varias cosas relacionadas sin esperar a que se complete la acción anterior.
En JavaScript, las funciones asíncronas son muy importantes debido a la naturaleza de un solo subproceso de JavaScript. 

Con la ayuda de funciones asíncronas, el bucle de eventos de 
JavaScript puede encargarse de otras cosas cuando la función solicita algún otro recurso.
Usarías un código asíncrono, por ejemplo, en las API que obtienen un archivo de la red, 
cuando accedes a una base de datos y devuelves datos de ella, cuando accedes a una transmisión de video desde una cámara web, o si estás transmitiendo la pantalla a un headset de realidad virtual. */