import { useState, useEffect, use } from "react";
// import "./Netflics.css"

const Netflics = () => {
    const [peliculas, setPeliculas] = useState([])
    const [busqueda, setBusqueda] = useState("")

    const MI_KEY = "c9f04fa4"

    useEffect(() => {
        fetch(`https://www.omdbapi.com/?apikey=${MI_KEY}&s=${busqueda}`)
            .then(response => response.json())
            .then(data => {
                    setPeliculas(data.Search);
            })
            .catch(error => {
                    console.error("Error fetching data:", error);
            })
        }, [busqueda])

    const manejadorFormulario = (e) => {
        e.preventDefault();
        setBusqueda(e.target.busqueda.value);
        e.target.busqueda.value = "";
    }

  return (
    <div>
        <h1>Netflics</h1>
        <form onSubmit={manejadorFormulario}>
            <input type="text" name="busqueda" />
            <button>Buscar</button>
        </form>
        <ul>
            {peliculas === undefined
                ? <h2> Pelicula no disponible</h2>
                : peliculas.map(peli => (
                    <li key={peli.imdbID}>
                        <img src={peli.Poster} alt={peli.Title} />
                        {peli.Title}
                    </li>
                ))
            }
        </ul>
    </div>
  )
}

export default Netflics