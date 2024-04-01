import { useState } from 'react'
import { useAuth } from '../../contexts/AuthContext'
import { createEvent } from '../../utils/eventRequest';

const FormRequest = () => {
  const { user } = useAuth();
  const [aprobando, setAprobando] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    date: '',
    time: '',
    place: '',
    description: '',
    images: '',
    status: 'Por aprobar',
    tickets: [],
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await createEvent(formData)
      console.log(res)
    } catch (error) {
      console.log(error)
    }
  }

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onload = (event) => {
      const image = new Image();
      image.src = event.target.result;

      image.onload = () => {
        const canvas = document.createElement('canvas');
        const maxSize = 800; // Tamaño máximo permitido

        let width = image.width;
        let height = image.height;

        if (width > height) {
          if (width > maxSize) {
            height *= maxSize / width;
            width = maxSize;
          }
        } else {
          if (height > maxSize) {
            width *= maxSize / height;
            height = maxSize;
          }
        }

        canvas.width = width;
        canvas.height = height;

        const ctx = canvas.getContext('2d');
        ctx.drawImage(image, 0, 0, width, height);

        const resizedImage = canvas.toDataURL('image/jpeg', 0.7); // Reducción de calidad a 70%

        setFormData({ ...formData, images: resizedImage });
      };
    };
    reader.readAsDataURL(file);
  };

  return (
    <div>
      <h2 className='bg-gradient-to-r from-complement-800 to-primary-600 montserrat text-3xl w-lg font-black text-center p-3 rounded-xl'>Cargar un Evento</h2>
      <form onSubmit={handleSubmit} className="max-w-lg mx-auto mt-5 p-5 lg:p-8 lg:rounded-2xl rounded-xl bg-primary-350 flex flex-col gap-3">
        <input
          type="text"
          placeholder="Nombre"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="p-2 bg-secondary-50 text-secondary-900 border rounded-xl w-full"
          required // Campo requerido
        />
        <input
          type="text"
          placeholder="Lugar del evento"
          name="place"
          value={formData.place}
          onChange={handleChange}
          className="p-2 bg-secondary-50 text-secondary-900 border rounded-xl"
          required // Campo requerido
        />
        <input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          className="p-2 bg-secondary-50 text-secondary-900 border rounded-xl"
          required // Campo requerido
        />
        {user.role === 'admin' && (
          <input
            type="time"
            name="time"
            id="time"
            className="p-2 bg-secondary-50 text-secondary-900 border rounded-xl"
            value={formData.time}
            onChange={handleChange}
          />
        )}
        <textarea
          type="text"
          placeholder="Descripción"
          name="description"
          value={formData.description}
          onChange={handleChange}
          className="p-2 bg-secondary-50 text-secondary-900 border rounded-xl md:col-span-2"
          required // Campo requerido
        />
        {user.role === 'admin' && (
          <select 
            className='p-2 bg-secondary-50 text-secondary-900 border rounded-xl' 
            name="estatus" 
            id="estatus" 
            value={formData.estatus} 
            onChange={handleChange}
          >
            <option value="Por aprobar">Por aprobar</option>
            <option value="Disponible">Disponible</option>
            <option value="Finalizado">Finalizado</option>
          </select>
        )}
        <h2 className='md:col-span-2 text-secondary-900 text-center'>Agrega una Imagen para mostrar el Evento :</h2>
        <input
          type="file"
          className="p-2 bg-secondary-50 text-secondary-900 border rounded w-full hover:bg-gray-300 focus:outline-none focus:bg-white md:col-span-2"
          name="images"
          onChange={handleImageChange}
          required
        />

        <button
          type="submit"
          className="bg-complement-500 hover:bg-complement-800 text-white font-bold py-2 px-4 rounded md:col-span-2"
        >
          Enviar
        </button>
      </form>
    </div>
  )
}

export default FormRequest
