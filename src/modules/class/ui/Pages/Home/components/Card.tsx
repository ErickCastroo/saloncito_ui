import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'



function Card() {
  const { t } = useTranslation()

  const datacard = [
    {
      title: 'Tarea 1',
      date: '20/10/2021',
      description: 'Realizar los ejercicios 1, 2 y 3 de la página 10.'
    },
    {
      title: 'Tarea 2',
      date: '25/10/2021',
      description: 'Realizar los ejercicios 4, 5 y 6 de la página 20.'
    },
    {
      title: 'Tarea 4',
      date: '30/10/2021',
      description: 'Realizar los ejercicios 7, 8 y 9 de la página 30.'
    },
    {
      title: 'Tarea 5',
      date: '30/10/2021',
      description: 'Realizar los ejercicios 7, 8 y 9 de la página 30.'
    },
    {
      title: 'Tarea 6',
      date: '30/10/2021',
      description: 'Realizar los ejercicios 7, 8 y 9 de la página 30.'
    },
    {
      title: 'Tarea 7',
      date: '30/10/2021',
      description: 'Realizar los ejercicios 7, 8 y 9 de la página 30.'
    },
  ]


  return (
    <>
      {datacard.map((data) => (
        <article className='w-full border p-4 mb-4 rounded-lg bg-white'>
          <h2 className='text-lg font-semibold mb-1'>{data.title}</h2>
          <p className='text-gray-500 text-sm mb-2'>{data.date}</p>
          <p className='text-gray-700 text-sm mb-4'>{data.description}</p>
          <hr className='border-t border-gray-200 my-4' />
          <Link to='trabajos' className='text-blue-500 text-sm cursor-pointer'>{t('showMore')}</Link>
        </article>
      ))}
    </>

  )
}

export { Card }
