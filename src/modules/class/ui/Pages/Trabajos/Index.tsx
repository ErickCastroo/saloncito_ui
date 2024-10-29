import { useParams, Link } from 'react-router-dom'

import { Header } from '@/modules/class/ui/Pages/Home/components/Header'

import { t } from 'i18next'

const trabajos = [
  { id: 1, title: 'Trabajo 1', description: 'Descripción del trabajo 1', dueDate: '2021-08-30', grade: 10 },
  { id: 2, title: 'Trabajo 2', description: 'Descripción del trabajo 2', dueDate: '2021-08-30', grade: 10 },
  { id: 3, title: 'Trabajo 3', description: 'Descripción del trabajo 3', dueDate: '2021-08-30', grade: 10 },
  { id: 4, title: 'Trabajo 4', description: 'Descripción del trabajo 4', dueDate: '2021-08-30', grade: 10 },
  { id: 5, title: 'Trabajo 5', description: 'Descripción del trabajo 5', dueDate: '2021-08-30', grade: 10 },
]

function Trabajos() {
  const { classId } = useParams()

  return (
    <>
      <Header />
      <div className='flex flex-col w-full md:w-4/5 lg:w-3/5 mx-auto p-4 md:p-6'>

        <div className='my-5'>
          <Link className='text-blue-500' to={`/classes/${classId}`}>
            {t('showMore')}
          </Link>

          <select className='flex my-5'>
            <option value=''>{t('filter.all')}</option>
            <option value='delivered'>{t('filter.delivered')}</option>
            <option value='pending'>{t('filter.pending')}</option>
            <option value='graded'>{t('filter.graded')}</option>
          </select>
        </div>

        <h1 className='text-2xl md:text-3xl lg:text-4xl text-black hover:text-blue-400 hover:underline cursor-pointer'>
          {t('pages.trabajos.title')}
        </h1>
        <hr className='w-full h-0.5 bg-gray-500 my-5' />

        <ul className='flex flex-col gap-4'>
          {trabajos.map(trabajo => (
            <li key={trabajo.id} className='my-2'>
              <Link to={`/classes/${classId}/trabajos/${trabajo.id}`} className='text-blue-500 hover:underline'>
                {trabajo.title}
              </Link>
              <hr className='w-full h-0.5 bg-gray-300 my-2' />
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}

export { Trabajos }
