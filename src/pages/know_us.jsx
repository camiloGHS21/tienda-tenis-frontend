import React from 'react';

const AboutUs = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Sobre Jordan
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            Conoce más sobre nuestra historia y equipo.
          </p>
        </div>
        <div className="bg-white p-8 rounded-lg shadow-md">
          <p className="text-lg text-gray-700">
            Jordan es una marca icónica en el mundo del deporte y la moda. Desde su fundación, hemos estado a la vanguardia de la innovación, ofreciendo productos que combinan estilo y rendimiento. Nuestra misión es inspirar y empoderar a nuestros clientes a través de productos de alta calidad y diseño excepcional.
          </p>
          <div className="mt-6">
            <h3 className="text-xl font-semibold text-gray-900">Nuestro Equipo</h3>
            <ul className="mt-4 space-y-4">
              <li className="flex items-center">
                <div className="flex-shrink-0 h-10 w-10">
                <img className="h-10 w-10 rounded-full" src="/public/img/descargar (1).jpg" alt="Miembro del equipo" />
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-900">Michael Jordan</p>
                  <p className="text-sm text-gray-600">Fundador y Embajador</p>
                </div>
              </li>
              <li className="flex items-center">
                <div className="flex-shrink-0 h-10 w-10">
                <img className="h-10 w-10 rounded-full" src="/public/img/Nicolas Grajales (1).jpg" alt="Miembro del equipo" />
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-900">Nicolas Grajales</p>
                  <p className="text-sm text-gray-600">Diseñador Principal</p>
                </div>
              </li>
              <li className="flex items-center">
                <div className="flex-shrink-0 h-10 w-10">
                  <img className="h-10 w-10 rounded-full" src="/public/img/camilo (1).png" alt="Miembro del equipo" />
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-900">Camilo Grajales</p>
                  <p className="text-sm text-gray-600">Directoro de Marketing</p>
                </div>
              </li>
              {/* Añade más miembros del equipo según sea necesario */}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
