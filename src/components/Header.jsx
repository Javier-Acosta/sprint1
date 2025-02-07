
import React from "react";
export default function Header(  ){
    
    return (
        <>
{/* 
<nav className="fixed top-0 left-0 w-full bg-red-900 bg-opacity-30 backdrop-blur-md z-50 transition-all duration-300">
<div className="flex justify-between items-center sm:px-12 sm:py-6 px-4 py-3">
  
  <div className="flex items-center gap-2">
    <img src="./assets/LogoNavbar.png" alt="Logo" className="w-[80px]"></img>
  </div>

 
  <button className="md:hidden text-white p-2">
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
    </svg>
  </button>

  
  <div className="hidden md:block">
    <ul className="flex sm:space-x-8 space-x-4 px-4">
      <li><a href="/" className="sm:text-lg text-sm text-white hover:text-sky-100 transition-transform duration-300 transform hover:scale-110">Inicio</a></li>
      <li><a href="/" className="sm:text-lg text-sm text-white hover:text-sky-100 transition-transform duration-300 transform hover:scale-110">Nosotros</a></li>
      <li><a href="/" className="sm:text-lg text-sm text-white hover:text-sky-100 transition-transform duration-300 transform hover:scale-110">Contacto</a></li>
      <li><a href="/" className="sm:text-lg text-sm text-white hover:text-sky-100 transition-transform duration-300 transform hover:scale-110">Soporte</a></li>
    </ul>
  </div>

  
  <div className="hidden md:block">
    <ul className="flex space-x-4">
      <li><a href="https://www.instagram.com" target="_blank" className="inline-block transition-transform duration-300 transform hover:scale-125"><i className="bi bi-instagram sm:text-2xl text-lg text-white transition-all duration-300 hover:text-sky-100"></i></a></li>
      <li><a href="https://www.github.com" target="_blank" className="inline-block transition-transform duration-300 transform hover:scale-125"><i className="bi bi-github sm:text-2xl text-lg text-white transition-all duration-300 hover:text-sky-100"></i></a></li>
    </ul>
  </div>
</div>


<div className="md:hidden absolute w-full bg-red-950 transition-all duration-300 opacity-0 invisible">
  <ul className="flex flex-col px-4 py-2">
    <li className="py-2 text-center"><a href="/" className="text-white hover:text-sky-100 block">Inicio</a></li>
    <li className="py-2 text-center"><a href="/" className="text-white hover:text-sky-100 block">Nosotros</a></li>
    <li className="py-2 text-center"><a href="/" className="text-white hover:text-sky-100 block">Contacto</a></li>
    <li className="py-2 text-center"><a href="/" className="text-white hover:text-sky-100 block">Soporte</a></li>
  </ul>
  <ul className="flex space-x-4 px-4 py-2 border-t border-red-700 justify-center">
    <li><a href="https://www.instagram.com" target="_blank" className="inline-block"><i className="bi bi-instagram text-lg text-white hover:text-sky-100"></i></a></li>
    <li><a href="https://www.github.com" target="_blank" className="inline-block"><i className="bi bi-github text-lg text-white hover:text-sky-100"></i></a></li>
  </ul>
</div>
</nav> */}

<header className="py-5 header">
        <div className="container-xl">
            <div className="row justify-content-center justify-content-md-between">
                <div className="col-8 col-md-3">
                    <a href="index.html">
                        <img className="img-fluid w-[80px] "  src="./assets/LogoNavbar.png" alt="imagen logo" />
                    </a>
                </div>
                <nav className="col-md-6 a mt-5 d-flex align-items-start justify-content-end">
                    <div 
                        className="carrito"
                    >
                        <img className="img-fluid" src="./public/img/carrito.png" alt="imagen carrito" />

                        <div id="carrito" className="bg-white p-3">
                            <p className="text-center">El carrito esta vacio</p>
                            <table className="w-100 table">
                                <thead>
                                    <tr>
                                        <th>Imagen</th>
                                        <th>Nombre</th>
                                        <th>Precio</th>
                                        <th>Cantidad</th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>
                                            <img className="img-fluid" src="./public/img/guitarra_02.jpg" alt="imagen guitarra" />
                                        </td>
                                        <td>SRV</td>
                                        <td className="fw-bold">
                                                $299
                                        </td>
                                        <td className="flex align-items-start gap-4">
                                            <button
                                                type="button"
                                                className="btn btn-dark"
                                            >
                                                -
                                            </button>
                                                1
                                            <button
                                                type="button"
                                                className="btn btn-dark"
                                            >
                                                +
                                            </button>
                                        </td>
                                        <td>
                                            <button
                                                className="btn btn-danger"
                                                type="button"
                                            >
                                                X
                                            </button>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>

                            <p className="text-end">Total pagar: <span className="fw-bold">$899</span></p>
                            <button className="btn btn-dark w-100 mt-3 p-2">Vaciar Carrito</button>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    </header>
        </>
    )
}

