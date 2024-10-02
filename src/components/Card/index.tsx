import { FC } from 'react'

interface CardProps {
  title: string;
  subtitle: string;
  description?: string;
  imageUrl: string; // Agregamos la propiedad para la imagen
  onClick?: () => void;
}

const Card: FC<CardProps> = ({ title, subtitle, description, imageUrl, onClick }) => {
  return (
    <div
      className='bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer transition-transform transform hover:translate-y-[-5px] mx-2 mb-4'
      onClick={onClick}
    >
      <div className='h-48 bg-cover bg-center' style={{ backgroundImage: `url(${imageUrl})` }}></div>
      
      <div className='m-4'>
        <h2 className='text-lg font-semibold mb-1'>{title}</h2>
        <p className='text-gray-500 text-sm mb-2'>{subtitle}</p>
        {description && <p className='text-gray-700 text-sm mb-4'>{description}</p>}
        <div className='flex justify-between'>
          <button className='bg-blue-600 text-white py-1 px-3 rounded-md hover:bg-blue-700 transition-colors text-sm'>
            Ver más
          </button>
          <button className='bg-red-600 text-white py-1 px-3 rounded-md hover:bg-red-700 transition-colors text-sm'>
            Eliminar
          </button>
        </div>
      </div>
    </div>
  )
}

export { Card }
