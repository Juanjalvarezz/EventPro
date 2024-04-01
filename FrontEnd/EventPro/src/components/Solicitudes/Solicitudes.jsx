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
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <h2 className='bg-gradient-to-r from-complement-800 to-primary-600 montserrat text-3xl w-xl my-6 font-black text-center py-1 px-4 rounded-xl'>Solicitudes de Eventos</h2>
          {promotorEvents && (
            promotorEvents.map(event => (
              <div key={event._id} className="montserrat font-bold w-11/12 md:w-3/4 lg:w-1/2 mb-6 text-xs md:text-sm lg:text-md">
                <div className="bg-primary-750 flex flex-col justify-center items-center mx-auto p-4 rounded-t-3xl">
                  <div className="flex justify-between">
                    <div className="flex flex-col items-center justify-center flex-1">
                      <div className="flex flex-col items-center justify-center py-2 px-4 w-11/12 rounded-xl bg-gradient-to-r from-[#1E40AF] to-primary-600 mb-2">
                        <p>Promotor: {event.promotor.name}</p>
                        <p>Email: {event.promotor.email}</p>
                      </div>
                      <div className="text-center flex flex-col">
                        <p>Evento: {event.name}</p>
                        <p>Ubicación: {event.place}</p>
                        <p>Fecha: 06 Julio</p>
                        <div className="flex justify-center">
                          <p>Estatus: </p>
                          <p className={`ml-2 ${event.status === 'Disponible' ? 'text-green-600' : 'text-amber-500'}`}>{event.status}</p>
                        </div>
                      </div>
                    </div>
                    <div className="flex justify-end items-center flex-1">
                      <img className="max-h-36" src={event.image} alt={event.name} />
                    </div>
                  </div>
                </div>
                <div className="flex justify-center items-center p-2 rounded-b-3xl gap-4 w-full bg-primary-250">
                  {user.role === 'admin' && (
                    <button className="bg-blue-500 w-36 rounded-xl p-2">Aceptar</button>
                  )}
                  <button className="bg-red-500 w-36 rounded-xl p-2">{`${user.role === 'admin' ? 'Rechazar' : 'Cancelar'}`}</button>
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
