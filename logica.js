// Añade un evento de escucha al campo de entrada para detectar la tecla Enter
document.getElementById("nombre").addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    adicionarNombre();
  }
});

const nombres = []; // Array para almacenar los nombres ingresados

// Nuevo array con las rutas de las imágenes
const imagenes = [
  'recursos/Hatsune Miku 1.jpeg',
  'recursos/Hatsune Miku 2.jpeg',
  'recursos/Hatsune Miku 3.jpeg',
  'recursos/Hatsune Miku 4.jpeg',
  'recursos/Hatsune Miku 5.jpeg',
  'recursos/Hatsune Miku 6.jpeg'
];

// Función para adicionar un nombre a la lista
function adicionarNombre() {
  const input = document.getElementById("nombre");
  const nombre = input.value.trim();
  if (nombre === "") {
    alert("Por favor, ingresa un nombre válido.");
    return;
  }
  nombres.push(nombre); // Añade el nombre al array
  actualizarLista(); // Actualiza la lista de nombres en el DOM
  input.value = ""; // Limpia el campo de entrada
}

// Función para actualizar la lista de nombres en el DOM
function actualizarLista() {
  const lista = document.getElementById("listaNombres");
  lista.innerHTML = ""; // Limpia la lista actual
  nombres.forEach((nombre) => {
    const li = document.createElement("li");
    li.textContent = nombre; // Añade el nombre al elemento de lista
    lista.appendChild(li); // Añade el elemento de lista al DOM
  });
}

// Función para seleccionar una imagen aleatoria del array de imágenes
function seleccionarImagenAleatoria(imagenes) {
  const indiceAleatorio = Math.floor(Math.random() * imagenes.length);
  return imagenes[indiceAleatorio];
}

// Función para mostrar una imagen en el contenedor de imágenes
function mostrarImagen(imagen) {
  const contenedor = document.getElementById('imagenes-container');
  contenedor.innerHTML = ''; // Limpia el contenedor

  const imgElement = document.createElement('img');
  imgElement.src = imagen; // Establece la fuente de la imagen
  imgElement.alt = 'Imagen de anime'; // Establece el texto alternativo
  contenedor.appendChild(imgElement); // Añade la imagen al contenedor
}

// Función para sortear un amigo secreto
function sortearAmigo() {
  if (nombres.length === 0) {
    alert("No hay nombres en la lista para sortear.");
    return;
  }
  const indiceAleatorio = Math.floor(Math.random() * nombres.length);
  const nombreSorteado = nombres[indiceAleatorio];
  document.getElementById("resultado").textContent = `${nombreSorteado}`; // Muestra el nombre sorteado

  // Selecciona y muestra una imagen aleatoria
  const imagenAleatoria = seleccionarImagenAleatoria(imagenes);
  mostrarImagen(imagenAleatoria);
}