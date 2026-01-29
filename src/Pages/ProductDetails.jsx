import { useParams, Link } from "react-router-dom"
import products from "../data/Products"
import { useCart } from "../context/CartContext"

const ProductDetails = () => {
  const { id } = useParams()
  const { addToCart } = useCart()

  const product = products.find((p) => p.id === Number(id))

  if (!product) {
    return (
      <div className="p-6">
        <h1 className="text-2xl font-bold">Product not found</h1>
        <Link to="/products" className="text-blue-600 underline">
          Back to products
        </Link>
      </div>
    )
  }

  return (
    <div className="p-6 max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-80 object-cover rounded"
      />

      <div>
        <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
        <p className="text-xl text-gray-700 mb-6">
          ${product.price}
        </p>

        <p className="text-gray-600 mb-6">
          This is a high-quality product carefully selected for our customers.
        </p>

        <button
          onClick={() => addToCart(product)}
          className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700"
        >
          Add to Cart
        </button>

        <div className="mt-6">
          <Link to="/products" className="text-blue-600 underline">
            ← Back to Products
          </Link>
        </div>
      </div>
    </div>
  )
}

export default ProductDetails
