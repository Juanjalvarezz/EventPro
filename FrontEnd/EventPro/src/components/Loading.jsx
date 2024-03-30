import { RiLoader4Line } from 'react-icons/ri'

const Loading = () => {
  return (
    <div className="flex justify-center items-center mx-auto">
      <RiLoader4Line />
      <h2 className='text-2xl font-bold poppins'>Loading...</h2>
    </div>
  )
}

export default Loading
