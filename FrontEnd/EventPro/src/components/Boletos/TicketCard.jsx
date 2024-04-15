import { useState } from "react";
import { IoIosArrowBack, IoIosArrowDown } from 'react-icons/io';

export default function TicketCard({ payment }) {
  const [mostrar, setMostrar] = useState(false)

  const mostrarDetalles = () => {
    setMostrar(!mostrar)
  }

  return (
    <div className='poppins'>
      <div className={`bg-secondary-50 text-primary-900 p-4 xl:p-6 flex flex-col ${mostrar ? 'rounded-t-2xl' : 'rounded-2xl'}`}>
        <div className="flex justify-between">
          <p className="font-bold">Orden: #{payment.orderNumber}</p>
          <div className="flex gap-4">
            <p>Fecha: <span className='font-bold'>{new Date(payment.payment.date).toLocaleDateString()}</span></p>
            <button onClick={mostrarDetalles}>
              {mostrar ?
                <IoIosArrowBack />
                :
                <IoIosArrowDown />
              }
            </button>
          </div>
        </div>
        <div className={`${mostrar ? 'block' : 'hidden'} flex flex-col`}>
          <div className="flex m-4">
            <div className="flex flex-col flex-1 pr-3 gap-3">
              <h3 className="text-2xl font-bold my-6">{payment.event.name}</h3>
              <div className="flex justify-between">
                <p>Estatus: </p>
                <p className={`font-semibold text-green-500`}>{payment.payment.status}</p>
              </div>
              <div className="flex flex-wrap">
                <p>Localización: </p>
                <div className="xs:text-sm overflow-hidden">
                  <span className={`lg:ml-2 font-semibold`}>{payment.event.place}</span>
                </div>
              </div>
              <p className="font-bold text-xl">Total: {payment.payment.rate}</p>
            </div>
            <div className="flex-1 flex justify-end items-start pl-2">
              <img className="max-h-72 rounded-lg" src={payment.event.image} alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className={`${mostrar ? 'block' : 'hidden'} bg-primary-400 w-full p-3 text-center rounded-b-2xl`}>
        <p className="font-bold text-secondary-50 w-full text-xl">Orden de los boletos: #{payment.orderNumber}</p>
        <p className="font-semibold text-secondary-50 w-full text-md">No compartas este codigo con nadie</p>
      </div>
    </div>
  );
}