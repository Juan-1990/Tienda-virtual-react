function ProductCard({producto, agregarCarrito}) {

  return (

    <div className="card">

      <h3>{producto.nombre}</h3>

      <p>${producto.precio}</p>

      <button onClick={() => agregarCarrito(producto)}>
        Agregar
      </button>

    </div>

  )

}

export default ProductCard