//Nivel 1

let employees = [{
    id: 1,
    name: 'Linux Torvalds'
}, {
    id: 2,
    name: 'Bill Gates'
}, {
    id: 3,
    name: 'Jeff Bezos'
}];

let salaries = [{
    id: 1,
    salary: 4000
}, {
    id: 2,
    salary: 1000
}, {
    id: 3,
    salary: 2000
}];

//Exercici 1 - Donats els objectes Employees i Salaries, creu una arrow function getEmpleado 
//que retorni una Promise efectuant la cerca en l'objecte pel seu id. Creu una altra arrow function 
//getSalario que rebi com a paràmetre un objecte Employee i retorni el seu salari.

// Arrow function getEmpleado 

let getEmpleado = new Promise((resolve, reject) => {

    let idEmpleado = 1;
    let idSalario = 1;

    if (idEmpleado != "" && idSalario != "") {
        resolve([employees.filter(empleado => empleado.id === idEmpleado), salaries.filter(empleado => empleado.id === idSalario)]);

    } else {
        reject("El valor idEmpleado o idSalario es Nulo");
    }

});

getEmpleado.then(values => {
    console.log(values);
}).catch((err) => {
    console.log("No es correcto: getEmpleado " + err);
});;

// Arrow function getSalario 

//Hacemos un map para recoger todos los objetos de employees
let empleado = employees.map(empleados => empleados);

// Recogemos 1 objeto de employee para pasarlo por parámetro a la función getSalario()
let objetoEmpleado = empleado[2].id;

let getSalario = (objetoEmpleado) => {
    return new Promise((resolve, reject) => {

        if (objetoEmpleado != undefined) {
            resolve([salaries.filter(salario => salario.id === objetoEmpleado)]);

        } else {
            reject("El valor objetoEmpleado no está definido");
        }

    });

};

getSalario(objetoEmpleado).then(values => {
    console.log(values);
}).catch((err) => {
    console.log("No es correcto: getSalario" + err);
});

//Exercici 2 - Creu una funció asíncrona que, rebent un id d'empleat, imprimeixi per pantalla 
//el nom de l'empleat i el seu salari

//Reutilizamos código hecho en la función anterior para recuperar el ID de empleado.
let numeroIdEmpleado = 2;
let idEmpleado = empleado[numeroIdEmpleado].id;

async function datosEmpleado(idEmpleado) {

    let extraerObjetoEmpleado = [employees.filter(empleado => empleado.id === idEmpleado)];
    let extraerObjetoSalario = [salaries.filter(salario => salario.id === idEmpleado)];

    let nombreEmpleado = extraerObjetoEmpleado.map(emp => emp[0].name);
    let salarioEmpleado = extraerObjetoSalario.map(emp => emp[0].salary);

    return "El Empleado " + nombreEmpleado + " tiene un salario de: " + salarioEmpleado + "$";
}

datosEmpleado(idEmpleado).then(values => {
    console.log(values);
})

//Nivel 2

//Exercici 1 - Creu una funció asíncrona que anomeni a una altra que retorni una Promise que efectuï la seva resolve amb una 
//demora de 2 segons.

async function demoraDosSegundos() {
    try {
        const datos = await getEmpleado;
        setTimeout(() => {
            console.log(datos);
        }, 2000);
    } catch (err) {
        console.log("Error en Nivel 3")
        console.log(err);
    }

}

demoraDosSegundos();

//Nivel 3

//Exercici 1 - Capturi tots els errors possibles del Nivell 2.

/*
Para realizar este ejercicio, hemos añadidco dentro de la función demoraDosSegundos() del ejercicio 1 del nivel 2, un try{}catch{}
Para comprobar que funciona y se muestra, se tiene que igualar la variable let idEmpleado = 1; (linea 33) o let idSalario = 1;
(linea 34) a nulo "" y se capturará y mostrará el error imprimiendo por pantalla el mensaje Error en Nivel 3 y el error que
devuelva la promesa getEmpleado
*/