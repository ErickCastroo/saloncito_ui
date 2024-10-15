import { useParams } from 'react-router-dom'
import { Header } from '@/modules/class/ui/components/Header'

function Classes() {
  const { classId } = useParams()

  console.log(classId)

  return (
    <>
      <Header />

      <div className="relative">
        <img
          src="https://via.placeholder.com/1200x400"
          alt="Example"
          className=" w-3/5 h-auto py-5 object-cover rounded-lg mx-auto"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="bg-black bg-opacity-50 p-4">
            <h1 className="text-white text-2xl md:text-3xl font-semibold">Curso de Matemáticas</h1>
            <p className="text-white text-sm">Profesor: Juan Pérez</p>
          </div>
        </div>
      </div>

      <div className='flex'>
        <div className="grid grid-cols-1 w-3/12 md:grid-cols-1 justify-items m-40 ">
          <div className="border w-full md:w-40 h-40 flex flex-col items-center justify-center p-4">
            <h2 className="text-sm p-2 text-center">Próximas</h2>
            <p className="text-sm text-gray-400 text-center">¡Excelente! No tienes ninguna tarea para entregar pronto.</p>
            <span className="text-blue-500 text-xs">Ver más</span>
          </div>
        </div>
        <div className='relative right-96 w-3/5 border'>
          <div className="p-4">
            <h2 className="text-lg font-semibold mb-1">Tarea 1</h2>
            <p className="text-gray-500 text-sm mb-2">Fecha de entrega: 20/10/2021</p>
            <p className="text-gray-700 text-sm mb-4">Realizar los ejercicios 1, 2 y 3 de la página 10.</p>
            <hr className="border-t border-gray-200 my-4" />
            <span className="text-blue-500 text-sm">Ver más</span>
          </div>
          <div className="p-4">
            <h2 className="text-lg font-semibold mb-1">Tarea 1</h2>
            <p className="text-gray-500 text-sm mb-2">Fecha de entrega: 20/10/2021</p>
            <p className="text-gray-700 text-sm mb-4">Realizar los ejercicios 1, 2 y 3 de la página 10.</p>
            <hr className="border-t border-gray-200 my-4" />
            <span className="text-blue-500 text-sm">Ver más</span>
          </div>
          <div className="p-4">
            <h2 className="text-lg font-semibold mb-1">Tarea 1</h2>
            <p className="text-gray-500 text-sm mb-2">Fecha de entrega: 20/10/2021</p>
            <p className="text-gray-700 text-sm mb-4">Realizar los ejercicios 1, 2 y 3 de la página 10.</p>
            <hr className="border-t border-gray-200 my-4" />
            <span className="text-blue-500 text-sm">Ver más</span>
          </div>
          <div className="p-4">
            <h2 className="text-lg font-semibold mb-1">Tarea 1</h2>
            <p className="text-gray-500 text-sm mb-2">Fecha de entrega: 20/10/2021</p>
            <p className="text-gray-700 text-sm mb-4">Realizar los ejercicios 1, 2 y 3 de la página 10.</p>
            <hr className="border-t border-gray-200 my-4" />
            <span className="text-blue-500 text-sm">Ver más</span>
          </div>
          <div className="p-4">
            <h2 className="text-lg font-semibold mb-1">Tarea 1</h2>
            <p className="text-gray-500 text-sm mb-2">Fecha de entrega: 20/10/2021</p>
            <p className="text-gray-700 text-sm mb-4">Realizar los ejercicios 1, 2 y 3 de la página 10.</p>
            <hr className="border-t border-gray-200 my-4" />
            <span className="text-blue-500 text-sm">Ver más</span>
          </div>

          <div className="p-4">
            <h2 className="text-lg font-semibold mb-1">Tarea 1</h2>
            <p className="text-gray-500 text-sm mb-2">Fecha de entrega: 20/10/2021</p>
            <p className="text-gray-700 text-sm mb-4">Realizar los ejercicios 1, 2 y 3 de la página 10.</p>
            <hr className="border-t border-gray-200 my-4" />
            <span className="text-blue-500 text-sm">Ver más</span>
          </div>
          <div className="p-4">
            <h2 className="text-lg font-semibold mb-1">Tarea 1</h2>
            <p className="text-gray-500 text-sm mb-2">Fecha de entrega: 20/10/2021</p>
            <p className="text-gray-700 text-sm mb-4">Realizar los ejercicios 1, 2 y 3 de la página 10.</p>
            <hr className="border-t border-gray-200 my-4" />
            <span className="text-blue-500 text-sm">Ver más</span>
          </div>
          <div className="p-4">
            <h2 className="text-lg font-semibold mb-1">Tarea 1</h2>
            <p className="text-gray-500 text-sm mb-2">Fecha de entrega: 20/10/2021</p>
            <p className="text-gray-700 text-sm mb-4">Realizar los ejercicios 1, 2 y 3 de la página 10.</p>
            <hr className="border-t border-gray-200 my-4" />
            <span className="text-blue-500 text-sm">Ver más</span>
          </div>
          <div className="p-4">
            <h2 className="text-lg font-semibold mb-1">Tarea 1</h2>
            <p className="text-gray-500 text-sm mb-2">Fecha de entrega: 20/10/2021</p>
            <p className="text-gray-700 text-sm mb-4">Realizar los ejercicios 1, 2 y 3 de la página 10.</p>
            <hr className="border-t border-gray-200 my-4" />
            <span className="text-blue-500 text-sm">Ver más</span>
          </div>  
        </div>

      </div>
    </>
  )
}

export { Classes }