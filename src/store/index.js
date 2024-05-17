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
}));

export default useProductStore;
