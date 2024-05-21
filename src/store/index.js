import { create} from 'zustand'
import { GetAllProducts,GetProduct} from '../api/ProductApi';
import { GetAllcarrito,addCarrito ,EliminarProductCarrito} from '../api/CarritoApi';
import { addUser ,getUser } from '../api/UserApi';
import { Login } from '../api/loginApi';
const useProductStore = create((set) => ({
  products: [],
  carrito: [],
  nombreUser: "",
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
   
      const data = await GetProduct(name);
      set({ products: data });
   
  },
  addProductToCarrito: async (name) => {
    try {
        const Product = await GetProduct(name);
       Product.map(cart => {addCarrito(cart)})
    } catch (error) {
        console.error('Error adding product to carrito:', error);
        // Handle error if needed
    }
  },
  deleteProductToCarrito: async (id) => {
    try {
       await EliminarProductCarrito(id);
  
    } catch (error) {
        console.error('Error adding product to carrito:', error);
        // Handle error if needed
       }
  },addUser:async (email,password,nombre,apellidos)=>{
    try {
       await addUser(email,password,nombre,apellidos);
  
    } catch (error) {
        console.error('Error adding User:', error);
        // Handle error if needed
       }
  },login:async (email,password)=>{
     try {
      await Login(email,password);
      document.cookie = `JSESSIONID=${email}:${password}; path=/`;
      window.location.href = '/';
     } catch (error) {
      console.error('Error Loggin: ', error);
     }
  },getUser:async ()=>{
    try {
      const data =  await getUser();
      const name = data.usuariosInfo.nombre+" "+data.usuariosInfo.apellidos
      set({ nombreUser: name });
    } catch (error) {
      console.error('Error fetching user:', error);
      // Handle error if needed
    }
  }
}));

export default useProductStore;
