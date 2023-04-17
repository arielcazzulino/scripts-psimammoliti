// Obtenemos la fecha actual
const fechaActual = new Date();

// Suponiendo que la fecha de inicio de las vacaciones está almacenada en una variable llamada "vacacionesDesde"
const vacacionesDesde = new Date("2023-04-10");

// Calculamos la diferencia de tiempo en milisegundos
const diferenciaTiempo = fechaActual.getTime() - vacacionesDesde.getTime();

// Convertimos la diferencia de tiempo a días
const diasTranscurridos = Math.floor(diferenciaTiempo / (1000 * 60 * 60 * 24));

// Mostramos el resultado
console.log(diasTranscurridos); // 7