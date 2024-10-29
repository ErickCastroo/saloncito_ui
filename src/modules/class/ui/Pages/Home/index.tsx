import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

import { Header } from '@/modules/class/ui/Pages/Home/components/Header'
import { Card } from '@/modules/class/ui/Pages/Home/components/Card'

function Classes() {
  const { classId } = useParams()

  const { t } = useTranslation()

  console.log(classId)

  return (
    <div className='w-full flex flex-col items-center justify-center'>
      <Header />

      <section className='relative w-full sm:w-8/12'>
        <img
          src='https://via.placeholder.com/1200x400'
          alt='Example'
          className=' w-full py-5 object-cover rounded-lg'
        />
        <div className='absolute inset-0 flex items-center justify-center'>
          <div className='bg-black bg-opacity-50 p-4'>
            <h1 className='text-white text-2xl md:text-3xl font-semibold'>Curso de Matemáticas</h1>
            <p className='text-white text-sm'>Profesor: Juan Pérez</p>
          </div>
        </div>
      </section>

      <section className='flex items-start justify-center w-full sm:w-8/12 px-2 sm:px-0 sm:space-x-2'>
        <div className='w-3/12 border hidden sm:flex flex-col items-center justify-center p-4 rounded-md'>
          <h2 className='w-full text-sm p-2 text-center'>{t('upcoming')}</h2>
          <p className='text-sm text-gray-400 text-center'>{t('message')}</p>
          <Link to='/' className='text-blue-500 text-xs cursor-pointer'>{t('showMore')}</Link>
        </div>
        <div className='w-full sm:w-9/12'>
          <input type='text' placeholder='aununcia algo en clase' className='border border-gray-300 mb-2 w-full rounded-lg p-4' />
          <Card />
        </div>
      </section>
    </div>
  )
}

export { Classes }