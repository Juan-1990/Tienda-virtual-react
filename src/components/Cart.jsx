function Cart({carrito}) {

  const total = carrito.reduce((acc, producto) => acc + producto.precio, 0)

  return (

    <div className="container">

      <div className="cart">

        <h2>Carrito</h2>

        {carrito.map((item, index) => (

          <p key={index}>
            {item.nombre} - ${item.precio}
          </p>

        ))}

        <h3 className="total">
          Total: ${total}
        </h3>

      </div>

    </div>

  )

}

export default Cart