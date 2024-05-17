import React, { useState, useEffect } from 'react';
import { CradProduct } from '../components/CradProduct';
import { GetAllProducts } from '../api/ProductApi'
export default function Products() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
      const fetchData = async () => {
        try {
          const data = await GetAllProducts();
          setProducts(data);
        } catch (error) {
          console.error('Error fetching products:', error);
          // Handle error if needed
        }
      };
  
      fetchData();
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

