import React from 'react'

function LandingCard() {

  const redirectToRegister = () => {
    window.location.href = '/register'; 
  };

  const redirectToLogin = () => {
    window.location.href = '/login'; 
  };

  return (

    <div className="flex justify-center items-center">
        <div className="max-w-md w-full md:w-4/5 bg-gradient-to-r from-blue-800 to-purple-600 rounded-xl shadow-2xl overflow-hidden p-8" style={{ animation: 'slideInFromLeft 1s ease-out', margin: 0 }}>
            <div className='mb-3'>
            <h2 className="text-center lg:text-5xl md:text-4xl sm:text-3xl xs:text-3xl font-extrabold text-white" style={{ animation: 'appear 2s ease-out', margin: 0 }}>
            ¡Bienvenido a EventPro!</h2>
            </div>
            <p>Sumérgete en el emocionante mundo de los eventos y boletos. Con EventPro, tendrás acceso a una amplia gama de eventos emocionantes, desde conciertos y festivales hasta conferencias y obras de teatro. Descubre experiencias inolvidables y asegura tus boletos con facilidad. ¡Prepárate para vivir momentos inolvidables con EventPro!</p>
            
            <div className="flex justify-center gap-5 mt-4">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline animate-bounce" onClick={redirectToLogin}>
                Login
            </button>
            <button className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline animate-bounce" onClick={redirectToRegister}>
                Registro
            </button> 

        </div>
    </div> 
        
    </div>

  )
}

export default LandingCard
