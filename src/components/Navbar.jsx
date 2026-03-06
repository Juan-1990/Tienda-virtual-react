function Navbar({cantidad}) {

  return (
    <div className="navbar">
      <h1>Tienda React</h1>

      <div className="cart-count">
        Carrito: {cantidad}
      </div>
    </div>
  )

}

export default Navbar