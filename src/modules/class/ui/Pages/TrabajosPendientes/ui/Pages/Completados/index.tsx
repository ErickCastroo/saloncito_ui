import { Header } from '@/modules/class/ui/Pages/TrabajosPendientes/ui/components/Header'
import { Acordion } from '@/modules/class/ui/Pages/TrabajosPendientes/ui/components/Acordion'

import { t } from 'i18next'


function TrabajosCompletados() {

  return (
    <>
      <Header />

      <div className='flex flex-col w-full md:w-4/5 lg:w-3/5 mx-auto p-4 md:p-6'>

        <div className='m-4'>
          <select className='w-3/5 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500'>
            <option value=''>{t('allClass')}</option>
            <option value='Clase 1'>Clase 1</option>
            <option value='Clase 2'>Clase 2</option>
            <option value='Clase 3'>Clase 3</option>
          </select>
        </div>
        <Acordion title={t('noDeadline')}>
          <p>Aquí están las tareas sin fecha límite asignadas.</p>
        </Acordion>
        <Acordion title={t('completeEarly')}>
          <p>No hay tareas para esta semana. ¡Buen trabajo!</p>
        </Acordion>
        <Acordion title={t('thisWeek')}>
          <p>Planifica tus tareas antes del lunes.</p>
        </Acordion>
        <Acordion title={t('lastWeek')} >
          <ul className="list-disc pl-5 space-y-1">
            <li>Estudiar para el examen final.</li>
            <li>Completar el proyecto de programación.</li>
          </ul>
        </Acordion>

        <Acordion title={t('previous')}>
          <ul className="list-disc pl-5 space-y-1">
            <li>Estudiar para el examen final.</li>
            <li>Completar el proyecto de programación.</li>
          </ul>
        </Acordion>
      </div>
    </>
  )
}

export { TrabajosCompletados }