import { useEffect, useState } from 'react';
import Loading from '../Animation/Loading';

function Pagos({ ticket }) {
  const [selectedPayment, setSelectedPayment] = useState('PagoMovil');

  const handlePaymentChange = (event) => {
    setSelectedPayment(event.target.value);
  };

  return (
    <>
      <h1 className='text-3xl text-center poppins font-bold mb-4 bg-gradient-to-r w-fit p-3 mx-auto from-complement-800 to-primary-600 rounded-xl shadow-2xl overflow-hidden'>Métodos de Pago</h1>

      <div className="flex justify-center mb-4">
        <select value={selectedPayment} onChange={handlePaymentChange} className="animate-pulse p-2 border rounded-lg text-white">
            <option value="PagoMovil">Pago Móvil</option>
          <option value="Transferencia">Transferencia</option>
        </select>
      </div>

      {selectedPayment === 'PagoMovil' && (
        <div id='PagoMovil' className='mx-auto w-4/5 text-center mt-5 montserrat'>
          <div className='bg-primary-800 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 items-center p-8 rounded-2xl'>
            <div className='font-extrabold lg:text-2xl md:text-xl sm:text-xl'>
              <h1 className='text-primary-250 text-3xl mb-5'>Pago Móvil</h1>
              <h2>Inversiones EventPro C.A</h2>
              <h2>J-501782500</h2>
              <h2>04129164371</h2>
              <h2>Banco de Venezuela</h2>
            </div>
            <div className='bg-gradient-to-r lg:w-4/5 md:w-full sm:w-full p-3 mx-auto from-complement-800 to-primary-600 rounded-2xl shadow-2xl overflow-hidden'>
              <form className='p-2'>
                <div className="mb-4" >
                  <input type="text" id="monto" placeholder="Ingrese el monto" className="appearance-none border rounded-2xl w-full py-4 px-3 text-black placeholder-gray-500 leading-tight focus:outline-none focus:shadow-outline bg-white"/>
                </div>
                <div className="mb-4">
                  <input type="text" id="referencia" placeholder="Ingrese la referencia" className="appearance-none border rounded-2xl w-full py-4 px-3 text-black placeholder-gray-500 leading-tight focus:outline-none focus:shadow-outline bg-white"/>
                </div>
                <div className="mb-6">
                  <input type="date" id="fecha" className="appearance-none border rounded-2xl w-full py-4 px-3 text-black placeholder-gray-500 leading-tight focus:outline-none focus:shadow-outline bg-white"/>
                </div>
                <div className="flex items-center justify-center">
                  <button type="submit" className="lg:text-xl md:text-lg sm:text-lg bg-primary-400 hover:bg-primary-500 text-white font-bold py-3 px-6 rounded-2xl focus:outline-none focus:shadow-outline">Enviar Pago</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}

      {selectedPayment === 'Transferencia' && (
        <div id='Transferencia' className='mx-auto w-4/5 text-center mt-5 montserrat'>
          <div className='bg-primary-800 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 items-center p-8 rounded-2xl'>
            <div className='font-extrabold lg:text-2xl md:text-xl sm:text-xl'>
              <h1 className='text-primary-250 text-3xl mb-5'>Transferencia</h1>
              <h2>Inversiones EventPro C.A</h2>
              <h2>J-501782500</h2>
              <h2>1234-5678-1234-5678</h2>
              <h2>Banco de Venezuela</h2>
            </div>
            <div className='bg-gradient-to-r lg:w-4/5 md:w-full sm:w-full p-3 mx-auto from-complement-800 to-primary-600 rounded-2xl shadow-2xl overflow-hidden'>
              <form className='p-2'>
                <div className="mb-4" >
                  <input type="text" id="monto" placeholder="Ingrese el monto" className="appearance-none border rounded-2xl w-full py-4 px-3 text-black placeholder-gray-500 leading-tight focus:outline-none focus:shadow-outline bg-white"/>
                </div>
                <div className="mb-4">
                  <input type="text" id="referencia" placeholder="Ingrese la referencia" className="appearance-none border rounded-2xl w-full py-4 px-3 text-black placeholder-gray-500 leading-tight focus:outline-none focus:shadow-outline bg-white"/>
                </div>
                <div className="mb-6">
                  <input type="date" id="fecha" className="appearance-none border rounded-2xl w-full py-4 px-3 text-black placeholder-gray-500 leading-tight focus:outline-none focus:shadow-outline bg-white"/>
                </div>
                <div className="flex items-center justify-center">
                  <button type="submit" className="lg:text-xl md:text-lg sm:text-lg bg-primary-400 hover:bg-primary-500 text-white font-bold py-3 px-6 rounded-2xl focus:outline-none focus:shadow-outline">Enviar Pago</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}

      <div className='text-center lg:w-3/5 md:w-3/5 sm:w-4/5 text-xl font-bold mx-auto mt-5'>
        <h1>Tu pago será verificado por uno de nuestros Administradores, y si todos los datos son correctos, te lo haremos saber!</h1>
      </div>

    </>
  );
}

export default Pagos;
