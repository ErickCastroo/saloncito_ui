import { NavLink } from 'react-router-dom'

import {
  HiOutlineBookOpen,
  HiOutlineArrowLeftOnRectangle,
  HiOutlineUserPlus
} from 'react-icons/hi2'

function GuestSection() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <NavLink
              className={({ isActive }) => {
                return `rounded flex items-center p-2 border-2 ${isActive ? '' : 'border-transparent'}`
              }}
              to='/about-saloncito'
            >
              <HiOutlineBookOpen className='mr-2 text-xl' /> About Saloncito
            </NavLink>
          </li>
          <li className='mt-2'>
            <NavLink
              className={({ isActive }) => {
                return `rounded flex items-center p-2 border-2 ${isActive ? '' : 'border-transparent'}`
              }}
              to='/sign-in'
            >
              <HiOutlineArrowLeftOnRectangle className='mr-2 text-xl' /> Sign in
            </NavLink>
          </li>
          <li className='mt-2'>
            <NavLink
              className={({ isActive }) => {
                return `rounded flex items-center p-2 border-2 ${isActive ? '' : 'border-transparent'}`
              }}
              to='/sign-up'
            >
              <HiOutlineUserPlus className='mr-2 text-xl' /> Sign up
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export { GuestSection }