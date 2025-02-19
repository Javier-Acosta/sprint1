
import React from 'react';
import { db } from '../data/db';
export default function Comentario ({comentario}){
const {name,description,image,price}=comentario

  return (

<>
<div className="col-md-6 col-lg-2 my-4 row align-items-center">
                <div className="col-4">
                    <img className="img-fluid w-[300px] h-[300px]" src={image} alt="imagen lentes" />
                </div>
                <div className="col-8">
                    <h3 className="text-black fs-4 fw-bold text-uppercase">{name}</h3>
                    <p>{ description}</p>
                    <p className="fw-black text-primary fs-3">{price}</p>
                    <button 
                        type="button"
                        className="btn btn-dark w-100"
                    >Agregar al Carrito</button>
                </div>
            </div>
</>
  )
}

