let notas = [10,4,6,8,3,7]

// .map --> recorre el array y devuelve uno nuevo modificado
// a partir de la condificón especificada en la función callback.
let notasHastaEl100 = notas.map(function(numero){

    return numero * 10

} )

// .filter --> recorre el array y filtra los elementos 
// de acuerdo a la condición generada en la función callback-.
// Devuelve un array nuevo a partir del resultado filtrado.
let notasAprobadas = notas.filter(function(numero) {

    return numero >= 7

} )

// .reduce --> recorre el array y devuelve un único valor.
// La func callback recibe 2 parámetros (acumulador y el elemento que esté recorriendo)
let sumaNotas = notas.reduce(function(estado, numero) {

    return estado + numero  

} )

// console.log(sumaNotas);


// .forEach --> Itera sobre un array, podremos modificar cada elemento a partir
// de la condificón generada en el callback. No tiene retorno. 
notas.forEach(function(valor, indice){

    console.log("En la posición " + indice + " tengo el valor " + valor);

} )

