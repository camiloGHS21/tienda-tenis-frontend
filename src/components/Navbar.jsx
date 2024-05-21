import React, { useState, Fragment, useEffect } from 'react'
import { Link } from "react-router-dom";
import useProductStore from '../store';
import { deleteCookie } from '../utils/Cookies';
import { Dialog, Transition } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'




export function Navbar() {
  const isAuthenticated = () => {
    // Verificar si la cookie JSESSIONID está presente
    const jsessionId = document.cookie
      .split('; ')
      .find(row => row.startsWith('JSESSIONID='));

    // Si la cookie JSESSIONID está presente, el usuario está autenticado
    return jsessionId !== undefined;
  };



  const fetchProduct = useProductStore((state) => state.searchProduct);
  const product = useProductStore((state) => state.products);
  const nombreUser1 = useProductStore((state) => state.nombreUser);
  const cart = useProductStore((state) => state.carrito)
  const fetchCart = useProductStore((state) => state.fetchCarrito)
  const fetchEliminar = useProductStore((state) => state.deleteProductToCarrito)
  const fetchUser = useProductStore((state) => state.getUser)
  const [nombre, setnombre] = useState("")
  const [abrirCarrito, setAbrirCarrito] = useState(false);
 
  useEffect(() => {
    fetchCart();
    fetchUser();
  }, [cart]);



  // Llamar a fetchProduct con el nombre del producto deseado
  // Llamar a fetchProduct con el nombre del producto deseado
  function buscar() {

    if (nombre.length > 0) {
      fetchProduct(nombre);
    }

  }
  function changeName(event) {
    setnombre(event.target.value);
  }


  const removeProduct = (idToRemove) => {
    fetchEliminar(idToRemove)
  };


  return (
    <>
      <nav className="bg-[#EAECEC] border-gray-200 dark:bg-gray-900">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
            <img src="img/logo.png" className="h-8" alt="Flowbite Logo" />
          </a>
          <div className="flex md:order-2">
            <button type="button" data-collapse-toggle="navbar-search" aria-controls="navbar-search" aria-expanded="false" className="md:hidden text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 me-1">
              <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
              </svg>
              <span className="sr-only">Search</span>
            </button>
            <div className="relative hidden md:block">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3 cursor-pointer" onClick={() => buscar()}>
                <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                  <path stroke="currentColor" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                </svg>
                <span className="sr-only">Search icon</span>
              </div>
              <input type="text" id="search-navbar" onKeyDown={(e) => { if (e.key === 'Enter') buscar() }} className="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search..." value={nombre} onChange={changeName} />
            </div>

            <button data-collapse-toggle="navbar-search" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-search" aria-expanded="false">
              <span className="sr-only">Open main menu</span>
              <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                <path stroke="currentColor" d="M1 1h15M1 7h15M1 13h15" />
              </svg>
            </button>

          </div>
<<<<<<< HEAD
=======
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-[#EAECEC] md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-[#EAECEC] dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <a href="/" className="block py-2 px-3 text-2xl text-black rounded md:bg-transparent " aria-current="page">Home</a>
            </li>
            <li>
              <Link to="/contact" className="block py-2 px-3 text-2xl text-black rounded md:bg-transparent " aria-current="page">Contact</Link>
            </li>
            <li>
            <Link to="/Login" className="block py-2 px-3 text-2xl text-black rounded md:bg-transparent " aria-current="page">Login</Link>
            </li>
            <li>
            <Link to="/Know_us" className="block py-2 px-3 text-2xl text-black rounded md:bg-transparent " aria-current="page">Know us</Link>
            </li>
          </ul>
        </div>
>>>>>>> ad8300d469af4c3e550c422a101f04f1924a80fd

          <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-search">
            <div className="relative mt-3 md:hidden">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                  <path stroke="currentColor" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                </svg>
              </div>
              <input type="text" id="search-navbar" className="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search..." />
            </div>
            <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-[#EAECEC] md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-[#EAECEC] dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <a href="/" className="block py-2 px-3 text-2xl text-black rounded md:bg-transparent " aria-current="page">Home</a>
              </li>
              <li>
                <Link to="/contact" className="block py-2 px-3 text-2xl text-black rounded md:bg-transparent " aria-current="page">Contact</Link>
              </li>
              {!isAuthenticated() && <li>
                <Link to="/Login" className="block py-2 px-3 text-2xl text-black rounded md:bg-transparent " aria-current="page">Login</Link>
              </li>
              }
              {
                isAuthenticated() &&
                <>
                  <button id="dropdownAvatarNameButton" data-dropdown-toggle="dropdownAvatarName" className="flex items-center text-sm pe-1 font-medium text-gray-900 rounded-full hover:text-blue-600 dark:hover:text-blue-500 md:me-0  dark:text-white" type="button">
                    <span className="sr-only">Open user menu</span>
                    <img className="w-8 h-8 me-2 rounded-full" src="/img/people/profile.svg" alt="user photo" />
                    {nombreUser1}              
                    <svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                      <path stroke="currentColor"  troke-width="2" d="m1 1 4 4 4-4" />
                    </svg>
                  </button>


                  <div id="dropdownAvatarName" className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600">
                    <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownInformdropdownAvatarNameButtonationButton">
                      <li>
                        <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Settings</a>
                      </li>
                    </ul>
                    <div className="py-2">
                      <button onClick={() => deleteCookie("JSESSIONID")} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white" aria-current="page">Sign out</button>
                    </div>
                  </div>
                </>
              }


            </ul>
          </div>

          <div className='flex flex-col ml-8 mr-5  md:order-3 '>
            <button className='hidden md:block' onClick={() => setAbrirCarrito(true)}>
              <img src="svg/carrito.svg" alt="" />
            </button>
          </div>
        </div>

      </nav>
      {<Transition.Root show={abrirCarrito} as={Fragment}>
        <Dialog className="relative z-10" onClose={setAbrirCarrito}>
          <Transition.Child
            as={Fragment}
            enter="ease-in-out duration-500"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in-out duration-500"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-hidden">
            <div className="absolute inset-0 overflow-hidden">
              <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
                <Transition.Child
                  as={Fragment}
                  enter="transform transition ease-in-out duration-500 sm:duration-700"
                  enterFrom="translate-x-full"
                  enterTo="translate-x-0"
                  leave="transform transition ease-in-out duration-500 sm:duration-700"
                  leaveFrom="translate-x-0"
                  leaveTo="translate-x-full"
                >
                  <Dialog.Panel className="pointer-events-auto w-screen max-w-md">
                    <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
                      <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
                        <div className="flex items-start justify-between">
                          <Dialog.Title className="text-lg font-medium text-gray-900">Shopping cart</Dialog.Title>
                          <div className="ml-3 flex h-7 items-center">
                            <button
                              type="button"
                              className="relative -m-2 p-2 text-gray-400 hover:text-gray-500"
                              onClick={() => setAbrirCarrito(false)}
                            >
                              <span className="absolute -inset-0.5" />
                              <span className="sr-only">Close panel</span>
                              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                            </button>
                          </div>
                        </div>

                        <div className="mt-8">
                          <div className="flow-root">
                            <ul role="list" className="-my-6 divide-y divide-gray-200">
                              {cart.map((cart) =>
                                cart.productos.map((product) => (
                                  <li key={product.id_producto} className="flex py-6">
                                    <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                                      <img
                                        src={product.imagen}
                                        alt={product.imagen}
                                        className="h-full w-full object-cover object-center"
                                      />
                                    </div>

                                    <div className="ml-4 flex flex-1 flex-col">
                                      <div>
                                        <div className="flex justify-between text-base font-medium text-gray-900">
                                          <h3>
                                            <a href={"product/" + product.id_producto}>{product.nombre}</a>
                                          </h3>
                                          <p className="ml-4">{product.precio}</p>
                                        </div>
                                        <p className="mt-1 text-sm text-gray-500">{product.color}</p>
                                      </div>
                                      <div className="flex flex-1 items-end justify-between text-sm">
                                        {/* <p className="text-gray-500">Qty {product.quantity}</p> */}

                                        <div className="flex">
                                          <button
                                            type="button"
                                            onClick={() => {
                                              removeProduct(product.id_producto)
                                            }}
                                            className="font-medium text-indigo-600 hover:text-indigo-500"
                                          >
                                            Remove
                                          </button>
                                        </div>
                                      </div>
                                    </div>
                                  </li>
                                )))}
                            </ul>
                          </div>
                        </div>
                      </div>

                      <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
                        <div className="flex justify-between text-base font-medium text-gray-900">
                          <p>Subtotal</p>
                          {cart.map((cart) => (
                            <p key={cart.id_carrito}>$ {cart.total}</p>
                          ))}
                        </div>
                        <p className="mt-0.5 text-sm text-gray-500">Shipping and taxes calculated at checkout.</p>
                        <div className="mt-6">
                          <a
                            href="#"
                            className="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
                          >
                            Checkout
                          </a>
                        </div>
                        <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
                          <p>
                            or{' '}
                            <button
                              type="button"
                              className="font-medium text-indigo-600 hover:text-indigo-500"
                              onClick={() => setOpen(false)}
                            >
                              Continue Shopping
                              <span aria-hidden="true"> &rarr;</span>
                            </button>
                          </p>
                        </div>
                      </div>
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </div>
        </Dialog>
      </Transition.Root>}
    </>
  )
}
