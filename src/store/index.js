import { create} from 'zustand'
import { GetAllProducts,GetProduct} from '../api/ProductApi';
import { GetAllcarrito,addCarrito } from '../api/CarritoApi';

const useProductStore = create((set) => ({
  products: [],
  carrito: [],
  fetchProducts: async () => {
    try {
      const data = await GetAllProducts();
      set({ products: data });
    } catch (error) {
      console.error('Error fetching products:', error);
      // Handle error if needed
    }
  }, fetchCarrito: async () => {
    try {
      const data = await GetAllcarrito();
      set({ carrito: [data] });
    } catch (error) {
      console.error('Error fetching products:', error);
      // Handle error if needed
    }
  },
  searchProduct: async (name) => {
    // Simular una búsqueda de producto por nombre
    const data = await GetProduct(name);

    // Actualizar el estado con los productos encontrados
      
      set({ products: data });
    
  },
  addProductToCarrito: async (name) => {
    try {
        const Product = await GetProduct(name);
       Product.map(cart => {addCarrito(cart);console.log(cart)})
        set({ carrito: carritoProduct});
    } catch (error) {
        console.error('Error adding product to carrito:', error);
        // Handle error if needed
    }
}

}));

export default useProductStore;
