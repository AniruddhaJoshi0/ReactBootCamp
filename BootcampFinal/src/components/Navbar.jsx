import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav className="bg-blue-600 p-4 text-white">
    <div className="flex gap-4">
      <Link to="/products">Product List</Link>
      <Link to="/products/add">Add Product</Link>
    </div>
  </nav>
);

export default Navbar;