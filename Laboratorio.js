function formatearTiempo(segundosTotales) {
    if (isNaN(segundosTotales) || segundosTotales < 0) {
        return "00:00:00";
    }

    const horas = Math.floor(segundosTotales / 3600);
    const minutos = Math.floor((segundosTotales % 3600) / 60);
    const segundos = segundosTotales % 60;

    const horasStr = String(horas).padStart(2, '0');
    const minutosStr = String(minutos).padStart(2, '0');
    const segundosStr = String(segundos).padStart(2, '0');

    return `${horasStr}:${minutosStr}:${segundosStr}`;
}

class Cancion {
  constructor(titulo, artista, album, duracionEnSegundos) {
    this.titulo = titulo;
    this.artista = artista;
    this.album = album;
    this.duracionEnSegundos = duracionEnSegundos;
    this.reproduciendo = false;
  }
}
    
class Accion {
    constructor(tipo, cancion, posicion) {
        this.tipo = tipo;         // "agregar" o "eliminar" (texto)
        this.cancion = cancion;   // Objeto completo de la clase Cancion
        this.posicion = posicion; // Índice numérico entero en la playlist (desde 0)
    }
    
}
// Crear una nueva canción usando la clase Cancion
const nuevaCancion = new Cancion("Bidi Bidi Bom Bom", "Selena Quintanilla", "Amor Prohibido", 205);

// Crear una acción de tipo "agregar" en la posición 4
const accionEliminar = new Accion("eliminar", nuevaCancion, 4);

console.log(accionEliminar);
    


// Programa principal
const miAlbum = {
    titulo: "Amor Prohibido",
    artista: "Selena Quintanilla",
    añoLanzamiento: 1994,

    canciones: [
        { track: 1, titulo: "Amor Prohibido", duracion: "3:45" },
        { track: 2, titulo: "No me queda mas", duracion: "4:12" },
        { track: 3, titulo: "Cobarde", duracion: "2:58" },
        { track: 4, titulo: "Fotos y recuerdo", duracion: "3:30" }
    ]
};

console.log(`--- Álbum: ${miAlbum.titulo} de ${miAlbum.artista} (${miAlbum.añoLanzamiento}) ---`);
console.log("Lista de canciones:");

miAlbum.canciones.forEach(cancion => {
    // Aplicando el formato: TÍTULO - ARTISTA (M:SS)
    console.log(`${cancion.track}. ${cancion.titulo.toUpperCase()} - ${miAlbum.artista} (${cancion.duracion})`);
});


class PilaEstatica {
#elementos = []; // estructura: un arreglo; el final es el tope
push(elemento) { // poner arriba
this.#elementos.push(elemento);
}
pop() { // quitar y devolver el de arriba
if (this.estaVacia()) {
throw new Error("Pila vacía: no hay nada que sacar");
}
return this.#elementos.pop();
}
peek() { // ver el de arriba sin quitarlo (también llamado tope)
if (this.estaVacia()) {
return undefined;
}
return this.#elementos[this.#elementos.length - 1];
}
estaVacia() {
return this.#elementos.length === 0;
esta
}
tamaño() {
return this.#elementos.length;
}


}

