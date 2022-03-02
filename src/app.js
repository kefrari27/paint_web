//Identificamos como areaDibujo al canvas
let cuadro = document.getElementById("areaDibujo");
//Definimos el context del canvas
let papel = cuadro.getContext("2d");

//Cuadro escucha el evento presionar click y ejecuta la funcion dibujarInicio
cuadro.addEventListener("mousedown", dibujarInicial);
//Cuadro escucha el evento soltar click y ejecuta la funcion dibujarFinal
cuadro.addEventListener("mouseup", dibujarFinal);
//Cuadro escucha el movimiento del mouse y ejecuta la función dibujarMovimiento
cuadro.addEventListener("mousemove", dibujarMovimiento);

//Estado del mouse. Inicia como false por defecto
let mouse = false;
// Coordenada en X
let x;
// Coordenada en Y
let y;
//Elemento Selección de color
let color = document.getElementById("seleccionColor");
//Elemento Selección de Grosor
let grosor = document.getElementById("seleccionGrosor");


//Función dibujar linea, es la función base para dibujar
function dibujarLinea(color, grosor, xInicial, yInicial, xFinal, yFinal){
  papel.beginPath();
  papel.strokeStyle = color;
  papel.lineWidth = grosor;
  papel.moveTo(xInicial, yInicial);
  papel.lineTo(xFinal, yFinal);
  papel.stroke();
  papel.closePath();
}

//Función dibujarInicial cambia estado de mouse a True
function dibujarInicial(e){
  mouse = true;
  x = e.layerX;
  y = e.layerY;
  // console.log(x);
  // console.log(y);
}
//Función dibujarFinal cambia estado de mouse a False
function dibujarFinal(e){
  mouse = false;
}
//Funcion dibujarMovimiento la cual ejecuta la función dibujarLinea
function dibujarMovimiento(e){
  if(mouse == true){
    dibujarLinea(color.value,grosor.value, x, y, e.layerX, e.layerY);
    x = e.layerX;
    y = e.layerY;
  }
}