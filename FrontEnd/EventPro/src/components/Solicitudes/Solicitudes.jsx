import { getEventByPromotor } from "../../utils/eventRequest"
import { useAuth } from "../../contexts/AuthContext"
import { useEffect, useState } from "react";
import Loading from "../Loading";

function Solicitudes() {
  const { user } = useAuth();
  const [promotorEvents, setPromotorEvents] = useState([]);
  const [isLoading, setIsLoading] = useState(true)

  const eventsByPromotor = async (id) => {
    try {
      const res = await getEventByPromotor(id);
      setPromotorEvents(res.data.events)
    } catch (error) {
      console.log(error)
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    if (user.role === 'promotor') {
      eventsByPromotor(user._id);
    }
  }, [user])

  return (
    <>
    <h2 className='bg-gradient-to-r from-complement-800 to-primary-600 montserrat w-fit text-3xl my-6 font-black text-center py-3 px-6  rounded-xl'>Solicitudes de Eventos</h2>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          {promotorEvents && (
            promotorEvents.map(event => (
              <div key={event._id} className="montserrat font-bold lg:w-3/5  sm:w-11/12 mb-6 text-xs md:text-sm lg:text-md">
                <div className="bg-primary-750 mx-auto p-6 rounded-t-3xl">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-3">

                  <div className="md:flex md:justify-center md:items-center md:flex-1">
                      <img className="lg:w-96 md:w-80 sm:w-72 rounded-3xl mx-auto" src={event.image} alt={event.name} />
                    </div>

                    <div className="md:flex md:flex-col md:items-center md:justify-center md:flex-1">
                      <div className="text-center md:text-center">
                        <p className="text-xl sm:text-2xl md:text-2xl lg:text-2xl text-[#CAA8F5] mb-4">{event.name}</p>
                        <p className="sm:text-lg md:text-lg lg:text-xl">Ubicación: {event.place}</p>
                        <p className="sm:text-lg md:text-lg lg:text-xl">Fecha: {new Date(event.date).toLocaleDateString()}</p>
                      </div>

                    <div className="flex justify-center md:justify-start">
                          <p className="text-sm sm:text-lg md:text-lg lg:text-xl">Estatus: </p>
                          <p className={`ml-2 ${event.status === 'Disponible' ? 'text-green-600' : 'text-amber-500'} text-sm sm:text-lg md:text-lg lg:text-xl`}>{event.status}</p>
                    </div>

                    </div>
                  </div>
                </div>
                <div className="flex justify-center items-center p-2 rounded-b-3xl gap-4 w-full bg-primary-250">
                  {user.role === 'admin' && (
                    <button className="bg-blue-500 w-36 rounded-xl p-2">Aceptar</button>
                  )}
                  <button className="bg-red-500 w-36 rounded-xl p-2 sm:text-lg md:text-xl lg:text-2xl">{`${user.role === 'admin' ? 'Rechazar' : 'Cancelar'}`}</button>
                </div> 
              </div>
            ))
          )}
        </>
      )}

    </>
  )
}

export default Solicitudes
