let cargarProducto = document.getElementById("producto");
let ingresarPrecio = document.getElementById("precio");
let agregar = document.getElementById("btn-agregar");
/* let calcularCompra = document.getElementById("calcular"); */
let botonDescuento = document.getElementById("descuento");
let chequearDescuento = document.getElementById("chequearDescuento");
let lista = document.getElementById("lista");
let total = document.getElementById("total");
let vaciar = document.getElementById("vaciar");

let totalProductos: string[] = [];
let totalPrecios: number[] = [];
let suma: number = 0;

const agregarAlCarrito = () => {
  totalProductos.push(cargarProducto.value);
  totalPrecios.push(Number(ingresarPrecio.value));
  lista?.innerHTML += `<li>${cargarProducto.value} : $${ingresarPrecio.value}</li>`;
  cargarProducto.value = "";
  ingresarPrecio.value =""; 

  //vaciar los campos de entrada
  cargarProducto.value = "";
  ingresarPrecio.value = "";
   };

const calcularTotal = () => {
  suma = 0;
  for (let i: number = 0; i < totalPrecios.length; i++) {
    suma += Number(totalPrecios[i]);
  }
  total?.innerHTML = suma;
};

const vaciarLista = () => {
  lista?.innerHTML = "";
  total.innerHTML = "";

 const verDescuento = () => {
  if (suma > 2500) {
    chequearDescuento.value = "";
    chequearDescuento.innerHTML += ` <li> Usted no tiene descuento </li>`;
  } else {
    chequearDescuento.value = "";
    chequearDescuento.innerHTML += `<li>¡Felicidades! Usted obtuvo un descuento de 10%!!" </li>`;
  }
};
//agregar eventos a los botones
agregar?.addEventListener("click", agregarAlCarrito, calcularTotal);
vaciar?.addEventListener("click", vaciarLista);
botonDescuento?.addEventListener("click", verDescuento);

//fin 

