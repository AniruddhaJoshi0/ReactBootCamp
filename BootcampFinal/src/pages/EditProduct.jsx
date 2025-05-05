import { useParams, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useProducts } from '../context/ProductContext';

const EditProduct = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { products, dispatch } = useProducts();
  const productToEdit = products.find((p) => p.id === id);

  const [product, setProduct] = useState({ ...productToEdit });

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: 'UPDATE_PRODUCT', payload: { ...product, price: parseFloat(product.price) } });
    navigate('/products');
  };

  if (!productToEdit) return <div>Product not found</div>;

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-md">
      <input
        type="text"
        value={product.name}
        onChange={(e) => setProduct({ ...product, name: e.target.value })}
        className="border p-2 w-full"
        required
      />
      <textarea
        value={product.description}
        onChange={(e) => setProduct({ ...product, description: e.target.value })}
        className="border p-2 w-full"
        required
      />
      <input
        type="number"
        value={product.price}
        onChange={(e) => setProduct({ ...product, price: e.target.value })}
        className="border p-2 w-full"
        required
      />
      <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded">
        Save Changes
      </button>
    </form>
  );
};

export default EditProduct;
