import Card from './Card'
import Carousel from './carrusel'

function DashboardCards() {
  return (
    <div className='bg-[#592E83] h-max -mt-8 p-8'>
      <h1 className='text-3xl text-center poppins font-bold mb-5'>Bienvenido a EventPro!</h1>
      <Carousel/>
      <div className="grid grid-1 gap-3 my-4">
        <Card />
        <Card />
      </div>
    </div>
  )
}

export default DashboardCards
