import ProductCard from "./ProductCard"

function ProductList({productos, agregarCarrito}) {

  return (

    <div className="container">

      <h2>Productos</h2>

      <div className="products">

        {productos.map(producto => (

          <ProductCard
            key={producto.id}
            producto={producto}
            agregarCarrito={agregarCarrito}
          />

        ))}

      </div>

    </div>

  )

}

export default ProductList