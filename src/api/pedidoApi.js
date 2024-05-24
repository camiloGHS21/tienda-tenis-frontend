import { getCookie } from "../utils/Cookies";

export async function crearPedido( total, userId,producto) {
    const URLProduct = "http://localhost:8080/api/pedidos/crear";
    const data = { cantidad: 0, precio_total:total,productos:producto ,usuario: {id_usuario:userId} };
    console.log(data)
    const credentials = getCookie("JSESSIONID");
    const encodedCredentials = btoa(credentials); 

    await fetch(URLProduct, {
        method: 'PATCH', 
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Basic ${encodedCredentials}` // Adding Basic Auth header
        },
        body: JSON.stringify(data) // Convertir el objeto data a JSON
    });
}
