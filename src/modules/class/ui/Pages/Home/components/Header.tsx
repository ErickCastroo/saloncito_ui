import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom'

function Header() {
  const location = useLocation()

  return (
    <div className='w-full border border-gray-200 bg-white'>
      <nav className='flex items-center justify-between p-2'>
        <div className='flex space-x-8'>
          <Link to={location.pathname} className=' text-blue-600 border-b-2 border-blue-600 pb-1 font-medium'>
            Novedades
          </Link>
          <Link to={`${location.pathname}/trabajos`} className=' text-gray-600 hover:text-black pb-1 font-medium'>
            Trabajo en clase
          </Link>
          <Link to={`${location.pathname}/compañeros`} className=' text-gray-600 hover:text-black pb-1 font-medium'>
            Compañeros
          </Link>
        </div>
      </nav>
    </div>
  )
}

export { Header }