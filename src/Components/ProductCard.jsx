import { Link } from "react-router-dom"
import { useCart } from "../context/CartContext"

const ProductCard = ({ product }) => {
  const { addToCart } = useCart()

  return (
    <div className="bg-white rounded-lg shadow hover:shadow-lg transition">
      <Link to={`/products/${product.id}`}>
        <img
          src={product.image}
          alt={product.name}
          className="h-48 w-full object-cover rounded-t-lg"
        />
      </Link>

      <div className="p-4">
        <Link to={`/products/${product.id}`}>
          <h2 className="font-semibold text-lg hover:text-blue-600">
            {product.name}
          </h2>
        </Link>

        <p className="text-gray-600 mt-2">${product.price}</p>

        <button
          onClick={() => addToCart(product)}
          className="mt-4 w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
        >
          Add to Cart
        </button>
      </div>
    </div>
  )
}

export default ProductCard
