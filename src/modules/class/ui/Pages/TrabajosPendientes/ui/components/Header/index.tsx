import { NavLink } from 'react-router-dom'

import { useTranslation } from 'react-i18next'

function Header() {
  const { t } = useTranslation()

  return (
    <div className='w-full border border-gray-200 bg-white'>
      <nav className='flex items-center justify-between p-2'>
        <div className='flex space-x-8 justify-center items-center'>
          <NavLink
            to="/trabajosPendientes"
            className={({ isActive }) =>
              isActive
                ? 'text-blue-600 border-b-2 border-blue-600 pb-1 font-medium'
                : 'text-gray-600 hover:text-black pb-1 font-medium'
            }
          >
            {t('pendingWorks')}
          </NavLink>
          <NavLink
            to="/trabajosAtrasados"
            className={({ isActive }) =>
              isActive
                ? 'text-blue-600 border-b-2 border-blue-600 pb-1 font-medium'
                : 'text-gray-600 hover:text-black pb-1 font-medium'
            }
          >
            {t('lateJob')}
          </NavLink>
          <NavLink
            to="/trabajosCompletados"
            className={({ isActive }) =>
              isActive
                ? 'text-blue-600 border-b-2 border-blue-600 pb-1 font-medium'
                : 'text-gray-600 hover:text-black pb-1 font-medium'
            }
          >
            {t('completedWorks')}
          </NavLink>
        </div>
      </nav>
    </div>
  )
}

export { Header }