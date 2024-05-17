import React, { useState } from 'react';

export default function Contact() {
  const [messageSent, setMessageSent] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [formErrors, setFormErrors] = useState({
    name: false,
    email: false,
    message: false
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    
    // Validar que los campos no estén vacíos
    const errors = {};
    Object.keys(formData).forEach((key) => {
      if (!formData[key]) {
        errors[key] = true;
      }
    });
    setFormErrors(errors);

    // Si hay errores, no enviar el formulario
    if (Object.keys(errors).length > 0) {
      return;
    }

    // Aquí puedes agregar la lógica para enviar el mensaje
    // Por ahora, solo cambiamos el estado para simular que se envió el mensaje
    setMessageSent(true);
    // Limpiar el formulario después de enviar el mensaje
    setFormData({
      name: '',
      email: '',
      message: ''
    });
    setFormErrors({
      name: false,
      email: false,
      message: false
    });
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  return (
    <main className='h-[83vh] flex justify-center items-center'>
   <div className="max-w-xl mx-auto p-6 bg-white rounded-md shadow-md  md:w-2/3 lg:w-1/2 ">
  <h2 className="text-2xl font-semibold mb-4">Contacto</h2>
  <p className="text-gray-600 mb-6">Ponte en contacto con nosotros para cualquier pregunta o consulta.</p>
  {messageSent && (
    <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative" role="alert">
      <strong className="font-bold">¡Mensaje enviado!</strong>
      <span className="block sm:inline"> Tu mensaje ha sido enviado correctamente.</span>
    </div>
  )}
  <form className="space-y-4" onSubmit={handleSubmit}>
    <div>
      <label htmlFor="name" className="block text-gray-700">Nombre:</label>
      <input
        type="text"
        id="name"
        name="name"
        placeholder="Tu nombre"
        className={`w-full px-4 py-2 rounded-md border ${formErrors.name ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:border-blue-500`}
        value={formData.name}
        onChange={handleChange}
      />
      {formErrors.name && <p className="text-red-500 text-xs mt-1">Por favor, introduce tu nombre.</p>}
    </div>
    <div>
      <label htmlFor="email" className="block text-gray-700">Correo electrónico:</label>
      <input
        type="email"
        id="email"
        name="email"
        placeholder="correo@example.com"
        className={`w-full px-4 py-2 rounded-md border ${formErrors.email ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:border-blue-500`}
        value={formData.email}
        onChange={handleChange}
      />
      {formErrors.email && <p className="text-red-500 text-xs mt-1">Por favor, introduce tu correo electrónico.</p>}
    </div>
    <div>
      <label htmlFor="message" className="block text-gray-700">Mensaje:</label>
      <textarea
        id="message"
        name="message"
        placeholder="Escribe tu mensaje aquí"
        className={`w-full px-4 py-2 rounded-md border ${formErrors.message ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:border-blue-500`}
        value={formData.message}
        onChange={handleChange}
      ></textarea>
      {formErrors.message && <p className="text-red-500 text-xs mt-1">Por favor, escribe tu mensaje.</p>}
    </div>
    <button type="submit" className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300">Enviar mensaje</button>
  </form>
</div>
</main>
  );
}
