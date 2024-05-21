import { getCookie,getEmailFromCookie } from "../utils/Cookies";
export async function addUser(email,password,nombre,apellidos) {
    const URLProduct = "http://localhost:8080/api/usuarios/guardar";
    try {
        const data = {email,password, usuariosInfo: {
            nombre,
            apellidos
          },
          carrito: {
            cantidad_de_productos: 0,
            total: 0,
            productos: [
             
            ]
          } }
        const response = await fetch(URLProduct, {
            method: 'POST', // Assuming you're sending a POST request
            headers: {
                'Content-Type': 'application/json' // Specify the content type
            },
            body: JSON.stringify(data)// Convert the object to JSON string
        });

        if (!response.ok) {
            throw new Error('Failed to fetch products');
        }
        const products = await response.json();
        return [products];
    } catch (error) {
        console.error('Error fetching products:', error);
        // You might want to handle the error here, such as showing an error message to the user.
    }
}

export async function getUser() {
    const loginURL = "http://localhost:8080/api/usuarios/buscar_email";
  
    const credentials = getCookie("JSESSIONID");
    const email = getEmailFromCookie(getCookie("JSESSIONID"))
    const encodedCredentials = btoa(credentials); // Encoding credentials to base64
    try {
        const response = await fetch(loginURL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Basic ${encodedCredentials}` // Adding Basic Auth header
            },
            body:email
        });
        
        if (!response.ok) {
            throw new Error('Failed to login. Please check your credentials.');
        }
        const user = await response.json();
        return user;
    } catch (error) {
        console.error('Error during login:', error);
        throw error; // Rethrow the error to be handled by the caller
    }
}