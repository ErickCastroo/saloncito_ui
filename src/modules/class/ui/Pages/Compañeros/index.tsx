import { useParams } from 'react-router-dom'

import { Header } from '@/modules/class/ui/Pages/Home/components/Header'

function Compañeros() {
  const { classId } = useParams()
  console.log(classId)

  const Profesor = {
    id: 1,
    name: 'Profesor 1',
    email: 'wsadasd'
  }

  const compañeros = [
    { id: 1, name: 'Compañero 1', email: 'compañ' },
    { id: 2, name: 'Compañero 2', email: 'compañ' },
    { id: 3, name: 'Compañero 3', email: 'compañ' },
    { id: 4, name: 'Compañero 4', email: 'compañ' },
    { id: 5, name: 'Compañero 5', email: 'compañ' },
  ]

  return (
    <>
      <Header />
      <div className='flex flex-col w-full md:w-4/5 lg:w-3/5 mx-auto p-4 md:p-6'>
        <h2 className='text-2xl md:text-3xl lg:text-4xl text-black hover:text-blue-400 hover:underline cursor-pointer mb-4'>
          Profesores
        </h2>
        <hr className='w-full h-0.5 bg-gray-500 my-3 md:my-5' />

        <ul className='flex flex-col gap-4'>
          <li className='my-2'>
            <span className='text-black'>{Profesor.name}</span>
          </li>
        </ul>

        <h2 className='text-2xl md:text-3xl lg:text-4xl text-black mt-8 md:mt-10 mb-4'>
          Compañeros de clase
        </h2>
        <hr className='w-full h-0.5 bg-gray-500 my-3 md:my-5' />

        <ul className='flex flex-col gap-4'>
          {compañeros.map(compañero => (
            <li key={compañero.id} className='my-2'>
              <span className='text-black'>{compañero.name}</span>
              <hr className='w-full h-0.5 bg-gray-300 my-2' />
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}

export { Compañeros }
