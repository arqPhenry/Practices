/*La función cargar películas lo que hará, será conectarse a la API, va a obtener los datos de las películas, y las va a cargar dentro de nuestro contenedor html de películas.

 (1) Para conectarnos a una API, usamos FETCH. Seguido de la URL de la API que nos provean:

const cargarPeliculas = () => {
    const respuesta = fetch("https://api.themoviedb.org/3/movie/550?api_key=556c1276881b07a931fbc8043c87352e");

    console.log(respuesta);
}
Ese "Fetch" nos va a devolver una PROMESA, y esa promesa la estamos guardando en la variable "respuesta".

Pero, como esa solicitud es una promesa, para que la linea que le siga tenga información, dicha promesa debe cumplirse antes de llegar a la siguiente linea, por eso, se le agrega la palabra AWAIT, antes de la palabra FETCH, para que de esta forma, la linea de abajo no se ejecute hasta que la PROMESA (solicitud) se cumpla:

const cargarPeliculas = () => {
    const respuesta = await fetch("https://api.themoviedb.org/3/movie/550?api_key=556c1276881b07a931fbc8043c87352e");

    console.log(respuesta);
}
PERO, ahora surge otra cosa, y es que el AWAIT, solo funciona dentro de funciones asincronas, por lo que debemos hacer de nuestra función, asincrona. Y eso lo hacemos escribiendo la palabra ASYNC antes de los paréntesis de los parámetros:

const cargarPeliculas = async () => {
    const respuesta = await fetch("https://api.themoviedb.org/3/movie/550?api_key=556c1276881b07a931fbc8043c87352e");

    console.log(respuesta);
}
Ahora, cuando uno trabaja con funciones asincronas, los errores son muy comunes y esos errores pueden romper tu aplicación, entonces, por eso cuando trabajemos con dichas funciones, es 100% recomendable hacer uso de TRY CATCH. Que es una forma de atrapar los errores y dar un mensaje al usuario en tal caso de que haya alguno, y evitar que la app se caiga con dicho error.

const cargarPeliculas = async () => {

    try{
        const respuesta = await fetch("https://api.themoviedb.org/3/movie/550?api_key=556c1276881b07a931fbc8043c87352e");

        console.log(respuesta);
    }
    catch{
        console.log(error);
    }
}
Ahora, con eso ya tenemos nuestra respuesta, pero ahora tenemos que acceder a la INFORMACIÓN. Esos datos que nos devuelve la petición vienen en formato JSON. Por lo que para poder acceder a ella, debemos hacer uso de ese método. Pero, el método JSON también es asincrono, por lo que también debemos colocarle el AWAIT, para que no prosiga con la siguiente linea hasta obtener todos los datos, y guardamos esos resultados en una variable:

const cargarPeliculas = async () => {

    try{
        const respuesta = await fetch("https://api.themoviedb.org/3/movie/550?api_key=556c1276881b07a931fbc8043c87352e");
        console.log(respuesta);

        const datos = await respuesta.json();
        console.log(datos);
    }
    catch{
        console.log(error);
    }
}
Ahora, diversificamos los posibles resultados de la variable respuesta, para saber que sucede cuando es 200, 401 o 404:

const cargarPeliculas = async () => {
    try{
        const respuesta = await fetch("https://api.themoviedb.org/3/movie/558?api_key=556c1276881b07a931fbc8043c87352e&language=es");
        console.log(respuesta);

        if(respuesta.status == 200){
            const datos = await respuesta.json();
            console.log(datos);
        }
        else if (respuesta.status == 401){
            console.log("Tu llave API es incorrecta, por favor revisa y vuelve a intentar");
        }
        else if (respuesta.status == 404){
            console.log("El id de la película que estás intentando buscar no existe");
        }
        else{
            console.log("Ocurrió un error poco común");
        }

        
    }
    catch(error){
        console.log(error);
    }
}
*/

let pagina = 1;
const btnAnterior = document.getElementById("btnAnterior");
const btnSiguiente = document.getElementById("btnSiguiente");

btnSiguiente.addEventListener("click", () =>{
    if(pagina > 1) {
        pagina += 1;
        cargarPeliculas();
    }
})
btnAnterior.addEventListener("click", () =>{
    if(pagina > 0);{
        pagina -= 1;
        cargarPeliculas();
    }
    
})

const cargarPeliculas = async () => {
    try{
        const respuesta = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=556c1276881b07a931fbc8043c87352e&language=es&page=${pagina}`);
        console.log(respuesta);

        if(respuesta.status == 200){
            const datos = await respuesta.json();

            let peliculas = " ";
            datos.results.forEach(pelicula => {
                peliculas += `
                
                <div class = "pelicula">
                    <img class="poster" src="https://image.tmdb.org/t/p/w500/${pelicula.poster_path}">
                    <h3 class="titulo">${pelicula.title}</h3>
                </div>
                `;
            });

            document.getElementById("contenedor").innerHTML = peliculas;
        }
        else if (respuesta.status == 401){
            console.log("Tu llave API es incorrecta, por favor revisa y vuelve a intentar");
        }
        else if (respuesta.status == 404){
            console.log("El id de la película que estás intentando buscar no existe");
        }
        else{
            console.log("Ocurrió un error poco común");
        }
    }
    catch(error){
        console.log(error);
    }
}

cargarPeliculas();