import { getCookie } from "../utils/Cookies";
export async function GetAllcarrito(id) {
    const URLProduct = "http://localhost:8080/api/cart/items";
    try {
        const credentials = getCookie("JSESSIONID");
        const encodedCredentials = btoa(credentials); 
        const response = await fetch(URLProduct,{
            method: 'POST', // Assuming you're sending a POST request
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Basic ${encodedCredentials}` // Adding Basic Auth header
            },
            body: id// Convert the object to JSON string
        });
        if (!response.ok) {
            throw new Error('Failed to fetch products');
        }
        const products = await response.json();
        return products;
    } catch (error) {
        console.error('Error fetching products:', error);
        // You might want to handle the error here, such as showing an error message to the user.
    }
}

export async function addCarrito(producto,id_carrito) {
    const URLProduct = "http://localhost:8080/api/cart/add_product";
    try {
        const credentials = getCookie("JSESSIONID");
        const encodedCredentials = btoa(credentials); 
        const data = {id_carrito,productos:[producto]}
        const response = await fetch(URLProduct, {
            method: 'PATCH', // Assuming you're sending a POST request
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Basic ${encodedCredentials}` // Adding Basic Auth header
            },
            body: JSON.stringify(data)// Convert the object to JSON string
        });
        if (!response.ok) {
            throw new Error('Failed to fetch products');
        }
        const products = await response.json();
        return products;
    } catch (error) {
        console.error('Error fetching products:', error);
        // You might want to handle the error here, such as showing an error message to the user.
    }
}

export async function EliminarProductCarrito(Idproducto,id) {
    const URLProduct = `http://localhost:8080/api/cart/remove_product?carritoId=${id}&productoId=${Idproducto}`;
    try {
        const credentials = getCookie("JSESSIONID");
        const encodedCredentials = btoa(credentials); 
        const response = await fetch(URLProduct, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Basic ${encodedCredentials}` // Adding Basic Auth header
            },
            // No es necesario enviar datos en el cuerpo de la solicitud para eliminar un producto
        });
    }  catch (error) {
        console.error('Error fetching products:', error);
        // You might want to handle the error here, such as showing an error message to the user.
    }
}
