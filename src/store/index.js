import { create} from 'zustand'
import { GetAllProducts,GetProduct} from '../api/ProductApi';
import { GetAllcarrito,addCarrito ,EliminarProductCarrito} from '../api/CarritoApi';
import { addUser ,getUser } from '../api/UserApi';
import { Login } from '../api/loginApi';
import { crearPedido } from '../api/pedidoApi';
const useProductStore = create((set) => ({
  products: [],
  carrito: [ {
    id_carrito: 0,
    cantidad_de_productos: 0,
    total: 0,
    productos: []
  }],
  nombreUser: "",
  idcarrito:0,
  productosInfo:[],
  fetchProducts: async () => {
    try {
      const data = await GetAllProducts();
      set({ products: data });
    } catch (error) {
      console.error('Error fetching products:', error);
      // Handle error if needed
    }
  }, fetchCarrito: async (id) => {
    try {
      const data = await GetAllcarrito(id);
      if(data === null){
        set({carrito:[  {
          id_carrito: 0,
          cantidad_de_productos: 0,
          total: 0,
          productos: []
        }]})
      
      }else{
        set({ carrito: [data] });
      }
      
      
    } catch (error) {
      console.error('Error fetching products:', error);
      // Handle error if needed
    }
  },
  searchProduct: async (name) => {
   
      const data = await GetProduct(name);
      set({ products: data });
   
  },
  addProductToCarrito: async (name,id) => {
    try {
        const Product = await GetProduct(name);
       Product.map(cart => {addCarrito(cart,id)})
    } catch (error) {
        console.error('Error adding product to carrito:', error);
        // Handle error if needed
    }
  },
  deleteProductToCarrito: async (id,idProduct) => {
    try {
       await EliminarProductCarrito(id,idProduct);
  
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
      const id_carrito = data.carrito.id_carrito;
      set({ nombreUser: name });
      set({ idcarrito : id_carrito})
    } catch (error) {
      
    }
  },setProductosInfo:async (name) =>{
    const product = await GetProduct(name);
    set({productosInfo: product})
  },
  crearPedido:async (total,productos)=>{
    const data =  await getUser();
    await crearPedido(total,data.id_usuario,productos);
    console.log(data.id_usuario)
  }
}));

export default useProductStore;
