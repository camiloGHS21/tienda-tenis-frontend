import React, { useState, useEffect } from 'react';
import { CradProduct } from '../components/CradProduct';
import useProductStore from '../store';

export default function Products() {
  const products = useProductStore((state) => state.products);
  const fetchProducts = useProductStore((state) => state.fetchProducts);
   const fetchProduct = useProductStore((state) => state.searchProduct);
  useEffect(() => {
    fetchProducts();
  }, []);
  
    return (
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 m-10">
       
        {products.map(product => (
          // Render your product components here
         <CradProduct key={product.id_producto} nombre={product.nombre} imagen={product.imagen} precio={product.precio}/>
        ))}
      </div>
    );
}

