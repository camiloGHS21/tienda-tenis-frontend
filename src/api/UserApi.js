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
