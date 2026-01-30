import { NavLink } from "react-router-dom"

const Navbar = () => {
  const linkClass = ({ isActive }) =>
    isActive
      ? "text-blue-600 font-semibold"
      : "text-gray-600 hover:text-blue-600"

  return (
    <nav className="bg-white shadow-md px-6 py-4 flex justify-between items-center">
      <h1 className="text-xl font-bold text-blue-600">Shop</h1>

      <div className="flex gap-6">
        <NavLink to="/" className={linkClass} end>
          My Home link
        </NavLink>
        <NavLink to="/products" className={linkClass}>
          Product name
        </NavLink>
        <NavLink to="/cart" className={linkClass}>
          CART side
        </NavLink>
      </div>
    </nav>
  )
}

export default Navbar
