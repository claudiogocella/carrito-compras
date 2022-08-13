//let cargarProducto = document.getElementById("producto");
//let ingresarPrecio = document.getElementById("precio");
//let agregar = document.getElementById("btn-agregar");
/* let calcularCompra = document.getElementById("calcular"); */
let botonDescuento = document.getElementById("descuento");
//let lista = document.getElementById("lista");
let total = document.getElementById("total");
let vaciar = document.getElementById("vaciar");
//let totalProductos: string[] = [];
//let totalPrecios: number[] = [];
//let suma: number = 0;

//metodo push para agregar un elemento al final del arreglo (asignar evento),
const agregarAlCarrito = () => {
  totalProductos.push(cargarProducto.value);
  totalPrecios.push(Number(ingresarPrecio.value));

  lista?.innerHTML += `<li>${cargarProducto.value} : $${ingresarPrecio.value}</li>`;

  total?.innerHTML = Number(suma.value);
  //ver video frontend 7, 1hora 20

  //vaciar los campos de entrada
  cargarProducto.value = "";
  ingresarPrecio.value = "";
};

const calcularTotal = () => {
  suma = 0;
  for (let i: number = 0; i < totalPrecios.length; i++) {
    suma += Number(precios[i]);
  }
  total?.innerHTML = suma;
};

const vaciarLista = () => {
  lista?.innerHTML = "";
  total.innerHTML = "";
};
//agregar eventos a los botones
agregar?.addEventListener("click", agregarAlCarrito);
calcularCompra?.addEventListener("click", calcularTotal);
vaciar?.addEventListener("click", vaciarLista);

/* 
function calcularCompra(
  arregloA: number[],
  arregloB: number[],
  cantidad: number
) {
  let i: number;
  for (i = 0; i < cantidad; i++) {
    sumaTotal += arregloA[i] * arregloB[i];
  }
  return sumaTotal;
}
*/

/* 
function calcularCompra(
  arregloA: number[],
  arregloB: number[],
  cantidad: number
) {
  let i: number;
  for (i = 0; i < cantidad; i++) {
    sumaTotal += arregloA[i] * arregloB[i];
  }
  return sumaTotal;
}
*/
