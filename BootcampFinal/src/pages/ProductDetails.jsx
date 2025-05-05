import { useParams } from 'react-router-dom';
import { useProducts } from '../context/ProductContext';

const ProductDetails = () => {
  const { id } = useParams();
  const { products } = useProducts();
  const product = products.find((p) => p.id === id);

  if (!product) return <div>Product not found</div>;

  return (
    <div className="p-4 border rounded">
      <h2 className="text-xl font-bold">{product.name}</h2>
      <p className="text-gray-600">{product.description}</p>
      <p className="text-green-600 font-semibold mt-2">${product.price}</p>
    </div>
  );
};

export default ProductDetails;