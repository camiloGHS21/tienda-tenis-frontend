
export async function Login(username, password) {
    const loginURL = "http://localhost:8080/api/login";
    const credentials = `${username}:${password}`;
    const encodedCredentials = btoa(credentials); // Encoding credentials to base64

    try {
        const response = await fetch(loginURL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Basic ${encodedCredentials}` // Adding Basic Auth header
            }
        });
        if (response.status === 401) {
           alert("el usuario y contraseña es incorrecto")
        }
        if (!response.ok) {
            throw new Error('Failed to login. Please check your credentials.');
        }
    } catch (error) {
        console.error('Error during login:', error);
        throw error; // Rethrow the error to be handled by the caller
    }
}
