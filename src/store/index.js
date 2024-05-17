import { create} from 'zustand'
import { GetAllProducts,GetProduct} from '../api/ProductApi';

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
  searchProduct: async (name) => {
    // Simular una búsqueda de producto por nombre
    const data = await GetProduct(name);

    // Actualizar el estado con los productos encontrados
    if(data.length > 0){
      set({ products: data });
    }
  },
  clearProducts: () => {
    set({ products: [] });
  },
}));

export default useProductStore;
