import { NavLink } from 'react-router-dom'

import { useTranslation } from 'react-i18next'

import {
  HiOutlineCalendar,
  HiOutlineHome,
  HiOutlineClipboardDocumentList
} from 'react-icons/hi2'

function PrincipalSection() {

  const { t } = useTranslation()

  return (
    <div>
      <nav>
        <ul>
          <li>
            <NavLink
              className={({ isActive }) => {
                return `rounded flex items-center p-2 border-2 ${isActive ? '' : 'border-transparent'}`
              }}
              to='/'
            >
              <HiOutlineHome className='mr-2 text-xl' />{t('home')}
            </NavLink>
          </li>
          <li className='mt-2'>
            <NavLink
              className={({ isActive }) => {
                return `rounded flex items-center p-2 border-2 ${isActive ? '' : 'border-transparent'}`
              }}
              to='/calendar'
            >
              <HiOutlineCalendar className='mr-2 text-xl' />{t('calendar')}
            </NavLink>
          </li>
          <li className='mt-2'>
            <NavLink
              className={({ isActive }) => {
                return `rounded flex items-center p-2 border-2 ${isActive ? '' : 'border-transparent'}`
              }}
              to='/trabajosPendientes'
            >
              <HiOutlineClipboardDocumentList className='mr-2 text-xl' /> {t('earrings')}
            </NavLink>
          </li>
        </ul>
      </nav>
      <nav className='mt-4'>
        <h2 className='p-2 text-lg'>
          {t('classesEnrolled')}
        </h2>
      </nav>
    </div>
  )
}

export { PrincipalSection }