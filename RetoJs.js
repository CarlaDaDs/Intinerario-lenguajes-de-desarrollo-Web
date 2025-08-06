//variables primitivas

const nombreCompleto= "Antuzia Carla de Abreu de Sousa";
let edad = 39;
let leGustaProgramar= true;

//objeto con propriedades
let persona={
    nombre:nombreCompleto,
    edad:edad,
    leGustaProgramar:leGustaProgramar
}

//array de intereses
let intereses = ["K-Dramas", "Informática","Manualidades"];

//funcion mostrarInfo
function mostrarInfo(persona, intereses){
    console.log("Nombre: "+ persona.nombre);
    console.log("Edad: "+ persona.edad);
    console.log("¿Le gusta programar:"+(persona.leGustaProgramar ? "Sí":"No"));
    console.log("Intereses:");
    for(let i=0; i<intereses.length; i++){
        console.log(" - "+ intereses[i]);
    };
}

//llamada a la función
mostrarInfo(persona,intereses)