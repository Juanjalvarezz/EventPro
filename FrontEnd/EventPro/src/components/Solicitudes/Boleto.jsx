import { useState } from 'react'

const Boleto = ({ ticketsList, setTicketsList }) => {

  const [values, setValues] = useState({
    type: '',
    available: 0,
    rate: 0,
  })

  const addTicket = () => {
    setTicketsList(ticketsList.push(values));
  }

  const handleChange = (value) => {
    setValues({ ...values, [value.target.name]: value.target.value })
  }

  return (
    <div className='flex flex-col justify-center items-center'>
      <label htmlFor="">Agega los boletos</label>
      <input type="text" name="type" id="type" value={values.type} placeholder='Tipo de boleto' onChange={handleChange} required />
      <input type="number" name="available" id="available" value={values.available} placeholder='Cantidad Disponible' required />
      <input type="number" name="rate" id="rate" value={values.rate} placeholder='Precio' required />
      <button onClick={() => addTicket}>Agregar Boleto</button>
      {ticketsList.length > 0 && (
        <div>
          {ticketsList.map((ticket, index) => (
            <>
              <div key={index} className='flex justify-between items-center'>
                <p>{ticket.type}</p>
                <p>{ticket.available}</p>
                <p>${ticket.rate}</p>
                <button>E</button>
                <button>X</button>
              </div>
            </>
          ))}
        </div>
      )}
    </div>
  )
}

export default Boleto
