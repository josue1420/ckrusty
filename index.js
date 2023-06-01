//variable que manttiene el menu
let menuVisible = false;

//funcion que oculta o muestra el menu
function mostrarOcultar(){
    if(menuVisible){
        document.getElementById('nav').classList = "";
        menuVisible = false;
    }else{
        document.getElementById('nav').classList = 'responsive';
        menuVisible = true;
        }
}
//ocultar menu cunado se selleciona la opcion
function seleccionar(){
    document.getElementById('nav').classList = "";
    menuVisible = false;
}

// Obtener referencia al botón y a las filas de menú
var button = document.getElementById('button-over');
var filasMenu = document.getElementsByClassName('fila');

if (filasMenu.length === 8) {
  button.style.display = 'none';
}

// Función para mostrar la mayoría de los menús al hacer clic en el botón
function mostrarMasMenu() {
  for (var i = 0; i < filasMenu.length; i++) {
    filasMenu[i].style.display = 'block';
  }
  button.style.display = 'none';
}

// Agregar el evento clic al botón
button.addEventListener('click', mostrarMasMenu);