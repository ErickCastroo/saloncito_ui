import Modal from '@/components/Modal'

import { useTranslation } from 'react-i18next'

function CreateClass({ active, toggle }: { active: boolean; toggle: () => void }) {
  const { t } = useTranslation()

  return (
    <Modal active={active} toggle={toggle}>
      <div className='w-full h-full overflow-y-auto p-5'>
        <div className='w-full h-auto text-black p-4'>
          <h3 className='flex items-start justify-start mt-5 mb-5 text-lg'>{t('createClass')}</h3>
          <input
            type='text'
            id='classCode'
            className='block w-full p-3 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 mb-4'
            placeholder='Ingresa el código de clase'
            required
          />

          <input
            type='text'
            placeholder={t('classDescription')}
            className='block w-full p-3 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 mb-4'
          />

          <input
            type='text'
            placeholder={t('classCode')}
            className='block w-full p-3 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 mb-4'
          />

          <input
            type='text'
            placeholder={t('classSubject')}
            className='block w-full p-3 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 mb-4'
          />
        </div>
        <div className='flex flex-row items-end justify-end'>
          <button className='text-black p-2 rounded-md mt-5 md:mr-2'>{t('cancel')}</button>
          <button className='text-black p-2 rounded-md mt-5'>{t('joinClass')}</button>
        </div>
      </div>
    </Modal>
  )
}

export { CreateClass }
