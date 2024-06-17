import peliculas from './peliculas.js'


let genAccion=peliculas.filter(peliculas=>peliculas.genre_ids.includes (28))
let genThriller=peliculas.filter(peliculas=>peliculas.genre_ids.includes (53))
let genAventuras=peliculas.filter(peliculas=>peliculas.genre_ids.includes (12))



const accion =document.getElementById("genero-28")
const Thriller =document.getElementById("genero-53")
const Aventura =document.getElementById("genero-12")

const generos =document.querySelectorAll("genre_ids")




function datosPelicula(){ peliculas.forEach(pelicula =>{pelicula.genre_ids})

let divPelicula = document.createElement("div")
divPelicula.classList.add("pelicula")
let tituloPelicula = document.createElement("p")
tituloPelicula.classList.add("titulo")
let portadaPelicula = document.createElement("img")
portadaPelicula.classList.add("portada")



//*tituloPelicula.textContent = pelicula.title
//*portadaPelicula.src = "https://image.tmdb.org/t/p/w500" + pelicula.poster_path
//*portadaPelicula.alt = pelicula.title*//

const imagen=document.createElement("img")
        imagen.src ="https://image.tmdb.org/t/p/w500" + peliculas.poster_path
        imagen.alt= pelicula.title


//*divPelicula.appendChild(tituloPelicula)
//*divPelicula.appendChild(portadaPelicula)
//*contenedor.appendChild(divPelicula)
//*}

//*const genero = document.querySelectorAll(".genero");

//*peliculas.forEach(pelicula => pelicula.genre_ids {
    //*const genero = document.getElementById("genero" + "genre_id")
   //*if(genero) {
        //*peliculaElemento = document.createElement("div")
       //* peliculaElemento.classList.add("pelicula")

       //* const imagen=document.createElement("img")
       //* imagen.src ="https://image.tmdb.org/t/p/w500" + peliculas.poster_path
        //*imagen.alt= pelicula.title

        //*const titulo = document.createElement("p")
        //*titulo.textContent =pelicula.title

       //* peliculaElemento.appendChild("imagen")
        //*pelicula.appendChild("titulo")
        //*peliculas.appendChild("peliculaElemento")
   //* }

   //* }
//*)







//* function filtrar(generoId,contenedor) {
//*for(let i = 0; i < peliculas.length; i++) {
  //*  const pelicula = peliculas[i]
    //*if(pelicula.genre_ids.includes(generoId)) {
      //*  datosPeliculas(pelicula,contenedor)
//*}
