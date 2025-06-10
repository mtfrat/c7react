import React, { useEffect, useState } from 'react'

const productos = [
        { id: 1, nombre: "Producto 1", precio: 100 },
        { id: 2, nombre: "Producto 2", precio: 200 },
        { id: 3, nombre: "Producto 3", precio: 300 }
    ];

const getProductos = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(productos);
        }, 2000);
    })
}


const AsyncAwait = () => {
    const [productos, setProductos] = useState([]);

    useEffect(() => {
        const pedirDatos = async () => {
            const inventarioProductos = await getProductos();
            setProductos(inventarioProductos);
    }
        pedirDatos();
    }  , []);

  return (
    <div>
        <h2>Async Await</h2>
        {
            productos.map((producto) => (
                <div key={producto.id}>
                    <h3>{producto.nombre}</h3>
                    <p>Precio: ${producto.precio}</p>
                </div>
            ))
        }
    </div>
  )
}

export default AsyncAwait