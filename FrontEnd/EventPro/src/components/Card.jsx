import { useState } from "react";
import { Link } from 'react-router-dom'

export default function Card() {
  const [mostrar, setMostrar] = useState(false)

  const mostrarDetalles = () => {
    setMostrar(!mostrar)
  }

  return (
    <>
      <div className="bg-white text-complement-800 p-4 xl:p-6 flex flex-col rounded poppins">
        <div className="flex justify-between">
          <p className="font-bold">Orden:#1234</p>
          <div className="flex gap-4">
            <p>24/03/2024</p>
            <button onClick={mostrarDetalles}>{'<'}</button>
          </div>
        </div>
        <div className={`${mostrar ? 'block' : 'hidden'} flex flex-col`}>
          <h3 className="text-2xl font-bold my-6">Encuentro con Cristo</h3>
          <div className="flex mb-4">
            <div className="flex flex-col flex-1 pr-3 gap-3">
              <div className="flex justify-between">
                <p>Estatus: </p>
                <p className={`font-semibold text-green-500`}>Disponible</p>
              </div>
              <div className="flex flex-wrap">
                <p>Localización: </p>
                <div className="xs:text-sm overflow-hidden">
                  <span className={`lg:ml-2 font-semibold`}>Iglesia Parroquial San Juan Bautista.</span>
                </div>
              </div>
              <p className="font-bold text-xl">Total: $30.00</p>
              <Link to={'#'}>ver detalles</Link>
            </div>
            <div className="flex-1 flex justify-end items-start pl-2">
              <img className="max-h-72" src="https://t2.uc.ltmcdn.com/es/posts/0/9/2/nombres_para_grupos_cristianos_51290_orig.jpg" alt="" />
            </div>
          </div>
          <div className="w-full">
            <button className="font-bold bg-primary-600 text-white w-full px-4 py-2 rounded">Ordena tu ticket</button>
          </div>
        </div>
      </div>
    </>
  );
}