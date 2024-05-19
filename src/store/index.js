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
      set({ carrito: data });
    } catch (error) {
      console.error('Error fetching products:', error);
      // Handle error if needed
    }
  },
  searchProduct: async (name) => {
    // Simular una búsqueda de producto por nombre
    const data = await GetProduct(name);

    // Actualizar el estado con los productos encontrados
    if(data.length > 0){
      set({ products: data });
    }
  },
  addProductToCarrito: async (name,cantidad) => {
    try {
        const carritoProduct = await GetProduct(name);
       carritoProduct.map(cart => {const total = cantidad*cart.precio;addCarrito({"cantidad_de_productos": 5,"total": 5000,"producto": carritoProduct})})
        set({ carrito: carritoProduct});
    } catch (error) {
        console.error('Error adding product to carrito:', error);
        // Handle error if needed
    }
}

}));

export default useProductStore;
