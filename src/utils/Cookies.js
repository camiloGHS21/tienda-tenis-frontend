export function getCookie(name) {
    const cookieString = document.cookie;
    const cookies = cookieString.split('; ');
  
    for (const cookie of cookies) {
      const [cookieName, cookieValue] = cookie.split('=');
      if (cookieName === name) {
        return decodeURIComponent(cookieValue);
      }
    }
  
    return null;
  }

export function deleteCookie(name) {
    document.cookie = name + '=;expires=Thu, 01 Jan 1970 00:00:01 GMT;path=/;';
}

export function getEmailFromCookie(cookieValue) {
    // Divide la cadena en partes usando ':'
    const parts = cookieValue.split(':');
    // La primera parte es el correo electrónico
    const email = parts[0];
    return email;
}
