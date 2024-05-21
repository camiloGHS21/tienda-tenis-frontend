import React from 'react';
import { FaTwitter, FaFacebook, FaInstagram } from 'react-icons/fa';

const AboutUs = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8 lg:flex-col">
      <div>
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Sobre Jordan
        </h2>
        <p className="mt-2 text-center text-sm text-gray-600">
          Conoce más sobre nuestra historia y equipo.
        </p>
      </div>
      <div className="bg-white p-8 rounded-lg shadow-md w-full lg:w-3/4 flex flex-col lg:flex-row justify-center items-center">
        <div className="w-full lg:w-1/2 mb-8 lg:mb-0 lg:flex lg:justify-center">
          <h3 className="text-xl font-semibold text-gray-900 text-center lg:text-left">Nuestro Equipo</h3>
          <ul className="mt-4 space-y-4 lg:space-y-0 lg:flex lg:flex-col lg:items-center lg:ml-4">
            <li className="flex items-center justify-center lg:justify-start">
              <div className="flex-shrink-0 h-10 w-10">
                <img className="h-full w-full object-cover rounded-full" src="/img/descargar (1).jpg" alt="Michael Jordan" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-900">Michael Jordan</p>
                <p className="text-sm text-gray-600">Fundador y Embajador</p>
              </div>
            </li>
            <li className="flex items-center justify-center lg:justify-start">
              <div className="flex-shrink-0 h-10 w-10">
                <img className="h-full w-full object-cover rounded-full" src="/img/130097149.jpg" alt="Nicolas Grajales" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-900">Nicolas Grajales hoyos</p>
                <p className="text-sm text-gray-600">Diseñador Principal</p>
              </div>
            </li>
            <li className="flex items-center justify-center lg:justify-start">
              <div className="flex-shrink-0 h-10 w-10">
                <img className="h-full w-full object-cover rounded-full" src="/img/camilo (1).png" alt="Camilo Grajales" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-900">Camilo Grajales Holgin</p>
                <p className="text-sm text-gray-600">Director de Marketing</p>
              </div>
            </li>
            {/* Añade más miembros del equipo según sea necesario */}
          </ul>
        </div>
        <div className="w-full lg:w-1/2">
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-gray-900 text-center">Contacto</h3>
            <p className="mt-2 text-sm text-gray-600 text-center">
              Si deseas ponerte en contacto con nosotros, no dudes en enviarnos un correo electrónico a <a href="mailto:contacto@jordan.com" className="text-blue-500">contacto@jordan.com</a> o llamarnos al <span className="text-blue-500">+123456789</span>.
            </p>
            <div className="flex justify-center mt-4">
              <a href="#" className="text-gray-900 hover:text-gray-999 text-3xl"><FaTwitter /></a>
              <a href="#" className="text-gray-900 hover:text-gray-900 text-3xl"><FaFacebook /></a>
              <a href="#" className="text-gray-900 hover:text-gray-900 text-3xl"><FaInstagram /></a>
            </div>

          </div>
          <div className="bg-white p-8 rounded-lg shadow-md mt-8">
            <h3 className="text-xl font-semibold text-gray-900 text-center">Términos y Condiciones</h3>
            <p className="mt-2 text-sm text-gray-600 text-center">
              Al usar nuestro sitio web, aceptas nuestros Términos y Condiciones. Para más detalles, por favor consulta nuestra página de <a href="#" className="text-blue-500">Términos y Condiciones</a>.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
