import { Header } from '@/modules/class/ui/Pages/TrabajosPendientes/ui/components/Header'
// import { Acordion } from '@/modules/class/ui/Pages/TrabajosPendientes/ui/components/Acordion'

// import { t } from 'i18next'



function TrabajosAtrasados() {
  return (
    <>
      <Header />
      <div className='flex justify-center items-center'>
        <h1 className='text-4xl'>
          Parece que no tienes trabajos pendientes
        </h1>
      </div>
    </>
  )
}

export { TrabajosAtrasados }
