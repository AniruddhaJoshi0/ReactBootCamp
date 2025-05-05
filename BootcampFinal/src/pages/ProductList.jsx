import { Link } from 'react-router-dom';
import { useProducts } from '../context/ProductContext';

const ProductList = () => {
  const { products, dispatch } = useProducts();

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Product List</h2>
      <ul className="space-y-4">
        {products.map((product) => (
          <li key={product.id} className="border p-4 rounded shadow-md">
            <h3 className="text-lg font-semibold">{product.name}</h3>
            <p>${product.price}</p>
            <div className="flex gap-2 mt-2">
              <Link
                to={`/products/${product.id}`}
                className="text-blue-500 underline"
              >
                View
              </Link>
              <Link
                to={`/products/${product.id}/edit`}
                className="text-green-500 underline"
              >
                Edit
              </Link>
              <button
                onClick={() => dispatch({ type: 'DELETE_PRODUCT', payload: product.id })}
                className="text-red-500"
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;