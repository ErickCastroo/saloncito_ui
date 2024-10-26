import Modal from '@/components/Modal'

import { useTranslation } from 'react-i18next'

function JoinClass({ active, toggle }: { active: boolean; toggle: () => void }) {
  const { t } = useTranslation()

  return (
    <Modal active={active} toggle={toggle}>
      <div className="w-full h-full overflow-y-auto p-5"> 
        <h2 className='text-xl text-black mb-5'>{t('joinClass')}</h2>

        <div className='border w-full h-auto text-black p-4'>
          <h3 className='flex items-start justify-start mt-5 text-lg'>Código de la clase</h3>
          <span className='flex items-start justify-start text-gray-400 text-sm mb-5'>
            Pídele a tu profesor el código de la clase y, luego, ingrésalo aquí
          </span>
          <input
            type='text'
            placeholder='Código de la clase'
            className='border-2 border-black w-full h-full rounded-md text-black p-2 mb-5'
          />
        </div>

        <p className='text-black mt-5 mb-5'>Para acceder con un código de la clase</p>
        <ul className="list-disc pl-5">
          <li className='text-black mb-2'>Usa una cuenta autorizada.</li>
          <li className='text-black mb-2'>Usa un código de la clase que tenga entre 5 y 7 letras o números, sin espacios ni símbolos.</li>
          <li className='text-black mb-2'>Si tienes problemas para unirte a la clase, pídele ayuda a tu profesor.</li>
        </ul>

        <div className="flex flex-row items-end justify-end">
          <button className='text-black p-2 rounded-md mt-5 md:mr-2'>{t('cancel')}</button>
          <button className='text-black p-2 rounded-md mt-5'>{t('joinClass')}</button>
        </div>
      </div>
    </Modal>
  )
}

export { JoinClass }
