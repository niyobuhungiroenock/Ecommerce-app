import { useCart } from "../context/CartContext"

const Cart = () => {
  const {
    cartItems,
    increaseQty,
    decreaseQty,
    removeFromCart,
    clearCart,
    cartTotal,
  } = useCart()

  if (cartItems.length === 0) {
    return (
      <div className="p-6">
        <h1 className="text-2xl font-bold">Your cart is empty</h1>
      </div>
    )
  }

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Shopping Cart</h1>

      <div className="space-y-4">
        {cartItems.map((item) => (
          <div
            key={item.id}
            className="flex items-center justify-between bg-white p-4 rounded shadow"
          >
            <div>
              <h2 className="font-semibold">{item.name}</h2>
              <p className="text-gray-600">${item.price}</p>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={() => decreaseQty(item.id)}
                className="px-3 py-1 bg-gray-200 rounded"
              >
                −
              </button>

              <span className="font-semibold">{item.quantity}</span>

              <button
                onClick={() => increaseQty(item.id)}
                className="px-3 py-1 bg-gray-200 rounded"
              >
                +
              </button>
            </div>

            <div className="flex items-center gap-4">
              <p className="font-semibold">
                ${item.price * item.quantity}
              </p>

              <button
                onClick={() => removeFromCart(item.id)}
                className="text-red-600 hover:underline"
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 bg-white p-4 rounded shadow flex justify-between items-center">
        <h2 className="text-xl font-bold">
          Total: ${cartTotal}
        </h2>

        <div className="flex gap-4">
          <button
            onClick={clearCart}
            className="bg-gray-300 px-4 py-2 rounded"
          >
            Clear Cart
          </button>

          <button className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">
            Checkout
          </button>
        </div>
      </div>
    </div>
  )
}

export default Cart
