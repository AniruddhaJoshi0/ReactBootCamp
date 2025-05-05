import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { ProductProvider } from './context/ProductContext';
import Navbar from './components/Navbar';

const ProductList = React.lazy(() => import('./pages/ProductList'));
const AddProduct = React.lazy(() => import('./pages/AddProduct'));
const ProductDetails = React.lazy(() => import('./pages/ProductDetails.jsx'));
const EditProduct = React.lazy(() => import('./pages/EditProduct'));

function App() {
  return (
    <ProductProvider>
      <Router>
        <Navbar />
        <div className="p-4">
          <Suspense fallback={<div>Loading...</div>}>
            <Routes>
              <Route path="/" element={<Navigate to="/products" />} />
              <Route path="/products" element={<ProductList />} />
              <Route path="/products/add" element={<AddProduct />} />
              <Route path="/products/:id" element={<ProductDetails />} />
              <Route path="/products/:id/edit" element={<EditProduct />} />
            </Routes>
          </Suspense>
        </div>
      </Router>
    </ProductProvider>
  );
}

export default App;