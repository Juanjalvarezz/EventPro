import { RiLoader4Line } from 'react-icons/ri'

const Loading = () => {
  /*
  <div className="flex justify-center items-center mx-auto">
    <RiLoader4Line />
    <h2 className='text-2xl font-bold poppins'>Loading...</h2>
  </div>
  */
  return (
    <div className="flex justify-center items-center mt-40 mb-40">
      <div className="loader ease-linear rounded-full border-8 border-t-8 border-secondary-200 h-24 w-24 shadow-2xl shadow-[#CAA8F5] animate-spin"></div>
    </div>
  )
}

export default Loading
