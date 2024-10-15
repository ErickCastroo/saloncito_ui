import { useParams } from 'react-router-dom'

import { Header } from '@/modules/class/ui/components/Header'
import { Card } from '@/modules/class/ui/components/card'

function Classes() {
  const { classId } = useParams()

  console.log(classId)

  return (
    <>
      <Header />

      <div className='relative'>
        <img
          src='https://via.placeholder.com/1200x400'
          alt='Example'
          className=' w-3/5 h-auto py-5 object-cover rounded-lg mx-auto'
        />
        <div className='absolute inset-0 flex items-center justify-center'>
          <div className='bg-black bg-opacity-50 p-4'>
            <h1 className='text-white text-2xl md:text-3xl font-semibold'>Curso de Matemáticas</h1>
            <p className='text-white text-sm'>Profesor: Juan Pérez</p>
          </div>
        </div>
      </div>

      <div className='flex'>
        <div className='grid grid-cols-1 w-3/12 md:grid-cols-1 justify-items m-40 '>
          <div className='border w-full md:w-40 h-40 flex flex-col items-center justify-center p-4'>
            <h2 className='text-sm p-2 text-center'>Próximas</h2>
            <p className='text-sm text-gray-400 text-center'>¡Excelente! No tienes ninguna tarea para entregar pronto.</p>
            <span className='text-blue-500 text-xs'>Ver más</span>
          </div>
        </div>
        <div className='relative right-96 w-3/5 '>
        <input type='text' placeholder='aununcia algo en clase' className='border border-gray-300 mb-2 w-full rounded-lg p-4'>
          
        </input>

          <Card />
        </div>

      </div>
    </>
  )
}

export { Classes }