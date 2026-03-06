import { useState } from "react"
import "./App.css"

import Navbar from "./components/Navbar"
import ProductList from "./components/ProductList"
import Cart from "./components/Cart"

import products from "./data/products"

function App() {

  const [carrito, setCarrito] = useState([])

  function agregarCarrito(producto) {

    setCarrito([...carrito, producto])

  }

  return (

    <>

      <Navbar cantidad={carrito.length} />

      <ProductList
        productos={products}
        agregarCarrito={agregarCarrito}
      />

      <Cart carrito={carrito} />

    </>

  )

}

export default App