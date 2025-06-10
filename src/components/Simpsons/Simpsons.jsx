import { useEffect, useState } from "react"

const Simpsons = () => {
    const [personaje, setPersonaje] = useState([])

    useEffect(() => {
        fetch('https://thesimpsonsquoteapi.glitch.me/quotes?count=15')
            .then(response => response.json())
            .then(data => {
                setPersonaje(data);
            })
            .catch(error => console.error('Error fetching data:', error))
                
    }, [])

  return (
    <div>
        <h1>Simpsons Quotes</h1>
        <ul>
            {personaje.map((item, index) => (
            <li key={index}>
                <p>{item.quote}</p> 
                <p><strong>{item.character}</strong></p>
                <img src={item.image} alt={item.character} />
            </li>
            ))}
        </ul>
    </div>
  )
}

export default Simpsons