import { NavLink } from 'react-router-dom'

import {
  HiOutlineCalendar,
  HiOutlineHome,
  HiOutlineClipboardDocumentList
} from 'react-icons/hi2'

function PrincipalSection() {
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
              <HiOutlineHome className='mr-2 text-xl' /> Home
            </NavLink>
          </li>
          <li className='mt-2'>
            <NavLink
              className={({ isActive }) => {
                return `rounded flex items-center p-2 border-2 ${isActive ? '' : 'border-transparent'}`
              }}
              to='/calendar'
            >
              <HiOutlineCalendar className='mr-2 text-xl' /> Calendar
            </NavLink>
          </li>
          <li className='mt-2'>
            <NavLink
              className={({ isActive }) => {
                return `rounded flex items-center p-2 border-2 ${isActive ? '' : 'border-transparent'}`
              }}
              to='/calendar'
            >
              <HiOutlineClipboardDocumentList className='mr-2 text-xl' /> Earrings
            </NavLink>
          </li>
        </ul>
      </nav>
      <nav className='mt-4'>
        <h2 className='p-2 text-lg'>
          Clases inscritas
        </h2>
      </nav>
    </div>
  )
}

export { PrincipalSection }