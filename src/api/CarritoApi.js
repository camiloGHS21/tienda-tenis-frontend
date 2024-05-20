export async function GetAllcarrito() {
    const URLProduct = "http://localhost:8080/api/cart/items";
    try {
        const response = await fetch(URLProduct);
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

export async function addCarrito(producto) {
    const URLProduct = "http://localhost:8080/api/cart/add_product";
    try {
        const data = {id_carrito: 3,productos:[producto]}
        const response = await fetch(URLProduct, {
            method: 'PATCH', // Assuming you're sending a POST request
            headers: {
                'Content-Type': 'application/json' // Specify the content type
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
