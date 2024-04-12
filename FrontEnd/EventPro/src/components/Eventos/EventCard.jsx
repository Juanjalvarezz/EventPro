import { Link } from 'react-router-dom'
import { UpdateButton, DeleteButton } from './adminEvents';

const EventCard = ({ events, userRole }) => {
  return (
    <div>
      <div className="grid grid-cols-2 gap-4">
        {events.map(event => (
          <div key={event._id} className="montserrat font-bold bg-primary-350 flex flex-col justify-between mx-auto p-6 rounded-3xl mb-6 text-xs md:text-sm lg:text-md">
            <div className="flex flex-col justify-between items-center gap-3">
              <div className="md:flex md:justify-center md:items-center md:flex-1">
                <img className="lg:w-96 md:w-80 sm:w-72 rounded-3xl mx-auto" src={event.image} alt={event.name} />
              </div>
              <div className="flex flex-col justify-center items-center w-full">
                <p className="text-xl sm:text-2xl md:text-2xl lg:text-2xl text-[#CAA8F5] mb-4">{event.name}</p>
                <div className="text-left">
                  <p className="sm:text-lg md:text-lg lg:text-xl">Ubicación: {event.place}</p>
                  <p className="sm:text-lg md:text-lg lg:text-xl">Fecha: {new Date(event.date).toLocaleDateString()}</p>
                  <p className="sm:text-lg md:text-lg lg:text-xl">Hora: {new Date(event.date).getHours() + ':' + new Date(event.date).getMinutes()}</p>
                  <div className="flex justify-center md:justify-start">
                    <p className="text-sm sm:text-lg md:text-lg lg:text-xl">Estatus: </p>
                    <p className={`ml-2 ${event.status === 'Disponible' ? 'text-green-600' : 'text-amber-500'} text-sm sm:text-lg md:text-lg lg:text-xl`}>{event.status}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-center items-center p-2 gap-4 w-full">
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
                <Link className="bg-blue-500 rounded-xl p-2 sm:text-md md:text-lg lg:text-xl" to={{ pathname: "/boletos", state: { boleto: event } }}>Comprar Boleto</Link>
              )}
            </div>
          </div>
        ))}

      </div>
    </div>
  )
}

export default EventCard
