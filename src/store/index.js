import { create} from 'zustand'
import { GetAllProducts} from '../api/ProductApi';

const useProductStore = create((set) => ({
  products: [],
  fetchProducts: async () => {
    try {
      const data = await GetAllProducts();
      set({ products: data });
    } catch (error) {
      console.error('Error fetching products:', error);
      // Handle error if needed
    }
  },
  searchProduct: async (productName) => {
    // Simular una búsqueda de producto por nombre (aquí puedes realizar la lógica real de búsqueda)
    // Supongamos que tenemos una función fetchProductByName que devuelve una lista de productos
    const products = await fetchProductByName(productName);

    // Actualizar el estado con los productos encontrados
    set({ products });
  },
}));

export default useProductStore;
