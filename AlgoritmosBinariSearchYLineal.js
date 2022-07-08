let numeros2 = [1, 4, 12, 15, 22, 44, 55];

const binarySearch = (list, buscado) => {
  let low = 0;
  let high = list.length - 1;
  let mitadDeLaLista = 0;
  let encontrado = 0;

  while (low <= high) {
    mitadDeLaLista = Math.floor((low + high) / 2);
    encontrado = list[mitadDeLaLista];

    if (encontrado === buscado) {
      return mitadDeLaLista;
    }

    if (encontrado > buscado) {
      high = mitadDeLaLista - 1;
    } else {
      low = mitadDeLaLista + 1;
    }
  }
  return "No se encontró el elemento"; // Si no encontramos el elemento
};

// console.log(binarySearch(numeros2, 2));