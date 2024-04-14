import { useNavigate } from 'react-router-dom'
import { UpdateButton, DeleteButton } from './adminEvents';

const EventCard = ({ events, userRole }) => {
  const navigate = useNavigate()

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 mx-auto text-white">
        {events.map(event => (
          <div key={event._id} className="w-11/12 montserrat font-bold bg-primary-500 dark:bg-primary-400 flex flex-col mx-auto p-6 rounded-3xl mb-6 text-xs md:text-sm lg:text-md">
            <div className="flex flex-col items-center">
            <div className="flex justify-center items-center">
              <img className="w-96 rounded-3xl h-64 " src={event.image} alt={event.name} />
            </div>

              <div className="flex flex-col justify-center items-center w-full">
                <h1 className="text-3xl font-black  text-primary-900  mt-4 mb-2">{event.name}</h1>
                <div className="w-4/5 text-center">
                  <p className="text-xl">Ubicación: {event.place}</p>
                  <p className="text-xl">Fecha: {new Date(event.date).toLocaleDateString()}</p>
                  <p className="text-xl">Hora: {new Date(event.date).toLocaleTimeString('en-US')}</p>
                  <p className="text-xl">Precio: </p>
                  <div className="flex justify-center md:justify-center">
                    <p className="text-sm sm:text-lg md:text-lg lg:text-xl">Estatus: </p>
                    <p className={`ml-2 ${event.status === 'Disponible' ? 'text-green-700' : 'text-amber-500'} text-sm sm:text-lg md:text-lg lg:text-xl`}>{event.status}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-center items-center p-2 gap-3 w-full">
              {userRole === 'admin' ? (
                <>
                  <UpdateButton
                    event={event}
                  />
                  <DeleteButton
                    event={event}
                  />
                </>
              ) : (
                <button type='button' className="bg-blue-500 rounded-xl p-4 sm:text-xl md:text-lg lg:text-xl" onClick={()=> navigate("/boletos", { state: { boleto: event }})}>Comprar Boleto</button>
              )}
            </div>
          </div>
        ))}

      </div>
    </div>
  )
}

export default EventCard
