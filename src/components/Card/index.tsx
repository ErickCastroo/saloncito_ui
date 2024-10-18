import { NavLink } from 'react-router-dom'

import { FC } from 'react'

interface CardProps {
  id: string
  title: string
  subtitle: string
  description?: string
  imageUrl: string
  onClick?: () => void
}

const Card: FC<CardProps> = ({ id, title, subtitle, description, imageUrl, onClick }) => {
  return (
    <NavLink to={`/classes/${id}`} >
      <div
        className='bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer hover:drop-shadow-lg mx-2 mb-4'
        onClick={onClick}
      >
        <div className='h-48 bg-cover bg-center' style={{ backgroundImage: `url(${imageUrl})` }}></div>

        <div className='m-4'>
          <h2 className='text-lg font-semibold mb-1'>{title}</h2>
          <p className='text-gray-500 text-sm mb-2'>{subtitle}</p>
          {description && <p className='text-gray-700 text-sm mb-4'>{description}</p>}
          <hr
            className='border-t border-gray-200 my-4'
          />
          <span className='text-blue-500 text-sm'>Ver más</span>
        </div>
      </div>
    </NavLink>
  )
}

export { Card }
