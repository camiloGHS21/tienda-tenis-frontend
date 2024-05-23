import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import useProductStore from '../store';

export default function ProductDetail() {
    const setProductosInfo = useProductStore((state) => state.setProductosInfo);
    const productosInfo = useProductStore((state) => state.productosInfo);
    const { productName } = useParams();

    const [favorite, setFavorite] = useState(false); // Estado para rastrear el estado de favorito

    useEffect(() => {
        setProductosInfo(productName);
    }, [setProductosInfo, productName]);

    const toggleFavorite = () => {
        setFavorite(!favorite); // Cambiar el estado de favorito
    };

    return (
        <section className="py-8 bg-white md:py-16 dark:bg-gray-900 antialiased">
            <div className="max-w-screen-xl px-4 mx-auto 2xl:px-0">
                {productosInfo.map((product) => (
                    <div className="lg:grid lg:grid-cols-2 lg:gap-8 xl:gap-16" key={product.id_producto}>
                        <div className="shrink-0 max-w-md lg:max-w-lg mx-auto">
                            <img className="w-full dark:hidden" src={"/" + product.imagen} alt={product.nombre} />
                            <img className="w-full hidden dark:block" src={product.imagen} alt={product.nombre} />
                        </div>

                        <div className="mt-6 sm:mt-8 lg:mt-0">
                            <h1 className="text-xl font-semibold text-gray-900 sm:text-2xl dark:text-white">
                                {product.nombre}
                            </h1>
                            <div className="mt-4 sm:items-center sm:gap-4 sm:flex">
                                <p className="text-2xl font-extrabold text-gray-900 sm:text-3xl dark:text-white">
                                    ${product.precio}
                                </p>

                                {/* Heart Icon */}
                                <div className="flex items-center gap-2 mt-2 sm:mt-0">
                                    <svg
                                        onClick={toggleFavorite}
                                        className={`w-6 h-6 cursor-pointer ${favorite ? 'text-red-500' : 'text-gray-400'}`}
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                        aria-hidden="true"
                                    >
                                        {favorite ? (
                                            <path
                                                fillRule="evenodd"
                                                d="M10 3c-2.42-3.16-7-1.32-7 2.67 0 3.42 5.34 7.26 7 8.76 1.66-1.5 7-5.34 7-8.76 0-3.99-4.58-5.83-7-2.67z"
                                                clipRule="evenodd"
                                            />
                                        ) : (
                                            <path
                                                fillRule="evenodd"
                                                d="M10 4.481c1.61-2.104 6-1.108 6 2.29 0 2.93-4.57 6.206-6 7.54-1.43-1.334-6-4.609-6-7.54 0-3.398 4.39-4.394 6-2.29z"
                                                clipRule="evenodd"
                                            />
                                        )}
                                    </svg>
                                    <p className="text-sm font-medium leading-none text-gray-500 dark:text-gray-400">(5.0)</p>
                                    <a
                                        href="#"
                                        className="text-sm font-medium leading-none text-gray-900 underline hover:no-underline dark:text-white"
                                    >
                                        345 Reviews
                                    </a>
                                </div>
                            </div>

                            <div className="mt-6 sm:gap-4 sm:items-center sm:flex sm:mt-8">
                                {/* Botón "Agregar a favoritos" */}
                                <button
                                    onClick={toggleFavorite}
                                    className="flex items-center justify-center py-2.5 px-5 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                                >
                                    {/* Ícono de corazón */}
                                    <svg
                                        className="w-5 h-5 me-2"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                        aria-hidden="true"
                                    >
                                        {favorite ? (
                                            <path
                                                fillRule="evenodd"
                                                d="M10 3c-2.42-3.16-7-1.32-7 2.67 0 3.42 5.34 7.26 7 8.76 1.66-1.5 7-5.34 7-8.76 0-3.99-4.58-5.83-7-2.67z"
                                                clipRule="evenodd"
                                            />
                                        ) : (
                                            <path
                                                fillRule="evenodd"
                                                d="M10 4.481c1.61-2.104 6-1.108 6 2.29 0 2.93-4.57 6.206-6 7.54-1.43-1.334-6-4.609-6-7.54 0-3.398 4.39-4.394 6-2.29z"
                                                clipRule="evenodd"
                                            />
                                        )}
                                    </svg>
                                    Add to favorites
                                </button>

                                {/* Botón "Agregar al carrito" */}
                                <button
                                    href="#"
                                    className="text-white mt-4 sm:mt-0 bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800 flex items-center justify-center"
                                    role="button"
                                >
                                    Add to cart
                                </button>
                            </div>

                            <hr className="my-6 md:my-8 border-gray-200 dark:border-gray-800" />

                            <p className="mb-6 text-gray-500 dark:text-gray-400">{product.descripcion}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
