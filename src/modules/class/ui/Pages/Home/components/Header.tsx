import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom'

import { useTranslation } from 'react-i18next'

function Header() {
  const location = useLocation()
  const { t } = useTranslation()

  return (
    <div className='w-full border border-gray-200 bg-white'>
      <nav className='flex items-center justify-between p-2'>
        <div className='flex space-x-8 justify-center items-center'>
          <Link to={location.pathname} className=' text-blue-600 border-b-2 border-blue-600 pb-1 font-medium'>
            {t('news')}
          </Link>
          <Link to={`${location.pathname}/trabajos`} className=' text-gray-600 hover:text-black pb-1 font-medium'>
            {t('classWork')}
          </Link>
          <Link to={`${location.pathname}/compañeros`} className=' text-gray-600 hover:text-black pb-1 font-medium'>
            {t('classmates')}
          </Link>
        </div>
      </nav>
    </div>
  )
}

export { Header }