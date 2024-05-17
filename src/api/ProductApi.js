

export async function GetAllProducts() {
    const URLProduct = "http://localhost:8080/api/productos/ver_todos";
    try {
        const response = await fetch(URLProduct);
        if (!response.ok) {
            throw new Error('Failed to fetch products');
        }
        const products = await response.json();
        console.log(products);
        return products;
    } catch (error) {
        console.error('Error fetching products:', error);
        // You might want to handle the error here, such as showing an error message to the user.
    }
}

export async function GetProduct(name) {
    const URLProduct = "http://localhost:8080/api/productos/buscar";
    try {
        const response = await fetch(URLProduct, {
            method: 'POST', // Assuming you're sending a POST request
            headers: {
                'Content-Type': 'application/json' // Specify the content type
            },
            body: name// Convert the object to JSON string
        });
        if (!response.ok) {
            throw new Error('Failed to fetch products');
        }
        const products = await response.json();
        console.log(products);
        return [products];
    } catch (error) {
        console.error('Error fetching products:', error);
        // You might want to handle the error here, such as showing an error message to the user.
    }
}
