import { useState } from 'react';
import { Link } from 'react-router-dom';
import { deleteEvent } from '../../utils/eventRequest';
import ModalConfirm from '../ModalConfirm';


export const UpdateButton = ({ event }) => {
  return (
    <>
      <Link className="bg-blue-500 w-36 rounded-xl text-center p-2 sm:text-md md:text-lg lg:text-xl" to={{ pathname: "/solicitudes", state: { event, isEditing: true } }}>Editar</Link>
    </>
  )
}

export const DeleteButton = ({ event }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = (eventId) => {
    console.log('presionando...')
    setIsOpen(prevState => ({
      ...prevState,
      [eventId]: true
    }));
  };

  const deleteEventRequest = async (id) => {
    try {
      const res = await deleteEvent(id);
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  const handleCloseModal = (eventId) => {
    setIsOpen(prevState => ({
      ...prevState,
      [eventId]: false
    }));
  };

  return (
    <>
      <button 
        className="bg-red-500 w-36 rounded-xl p-2 sm:text-md md:text-lg lg:text-xl"
        onClick={() => handleOpen(event.id)}>
          Eliminar
      </button>
      <ModalConfirm
        isOpen={isOpen[event._id]}
        onCancel={() => handleCloseModal(event._id)}
        onConfirm={() => deleteEventRequest(event._id)}
        id={event._id}
      />
    </>
  )
}