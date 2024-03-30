import { useEffect, useState } from 'react';
import axios from 'axios';
import Footer from '../components/Footer';
import cd from '../assets/img/cd.png';
import AnimatedPage from '../components/AnimatedPage';
import { useAuth } from '../contexts/AuthContext';
import PromotorHeader from './PromotorHeader';

const PromoProfile = () => {
  const { user } = useAuth();
  const [editing, setEditing] = useState(false);
  const [editedUser, setEditedUser] = useState({ name: '', email: '' });

  useEffect(() => {
    setEditedUser(user);
  }, [user]);

  const handleEdit = () => {
    setEditing(true);
  };

  const handleSave = async () => {
    try {
      const res = await axios.put(`${import.meta.env.VITE_API_URL}/auth/users/${user._id}`, editedUser);
      console.log('User updated:', res.data);
      setEditing(false);
    } catch (error) {
      console.error('Error updating user:', error);
    }
  };

  return (
    <>
      <AnimatedPage>
        <PromotorHeader/>

        <img src={cd} className="animate-spin w-40 h-auto object-cover mx-auto mb-5" />
        <section className="w-11/12 mx-auto mt-5">
          <h1 className='text-3xl text-center poppins font-bold mb-4'>Perfil de Usuario</h1>
          <div className="bg-[#9984D4] rounded-lg shadow-md p-8 mx-auto max-w-md w-11/12">
            <div className="flex flex-col items-center">
              {editing ? (
                <>
                  <input
                    type="text"
                    value={editedUser.name}
                    onChange={e => setEditedUser({ ...editedUser, name: e.target.value })}
                    className="mb-2 px-2 py-2 border rounded-lg w-full"
                    placeholder="Nombre"
                    style={{ minHeight: '40px' }}
                  />
                  <input
                    type="text"
                    value={editedUser.email}
                    onChange={e => setEditedUser({ ...editedUser, email: e.target.value })}
                    className="mb-2 px-2 py-2 border rounded-lg w-full"
                    placeholder="Correo electrónico"
                    style={{ minHeight: '40px' }}
                  />
                  <button onClick={handleSave} className="bg-blue-500 hover:bg-blue-700 text-secondary-50 font-bold py-2 px-4 rounded mt-2">
                    Guardar
                  </button>
                </>
              ) : (
                <>
                  {user && (
                    <>
                      <div className='text-center'>
                        <h3 className="text-3xl font-bold mb-2">Hola! {user.name}</h3>
                        <p className="poppins font-bold text-2xl mb-1 text-[#230C33]">Email: {user.email}</p>
                        <p className="poppins font-bold text-2xl mb-1 text-[#230C33]">Rol: {user.role}</p>
                      </div>
                      <button
                        onClick={handleEdit}
                        className="bg-blue-500 animate-bounce hover:bg-blue-700 text-secondary-50 font-bold py-2 px-4 rounded mt-2"
                      >
                        Editar Perfil
                      </button>
                    </>
                  )}
                </>
              )}
            </div>
          </div>
        </section>

        <Footer />
      </AnimatedPage>
    </>
  );
};

export default PromoProfile;
