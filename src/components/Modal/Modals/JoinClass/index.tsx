import Modal from '@/components/Modal'

import { useTranslation } from 'react-i18next'

function JoinClass({ active, toggle }: { active: boolean; toggle: () => void }) {
  const { t } = useTranslation()

  return (
    <Modal active={active} toggle={toggle}>
      <div className="w-full h-full overflow-y-auto p-5">
        <h2 className='text-xl text-black mb-5'>{t('joinClass')}</h2>

        <div className='border w-full h-auto text-black p-4'>
          <h3 className='flex items-start justify-start mt-5 text-lg'>{t('codeClass')}</h3>
          <span className='flex items-start justify-start text-gray-400 text-sm mb-5'>
            {t('instructions')}
          </span>
          <input
            type='text'
            placeholder={t('codeClass')}
            className='block w-full p-3 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 mb-4'
          />
        </div>

        <p className='text-black mt-5 mb-5'>{t('instruction2')}</p>
        <ul className="list-disc pl-5">
          <li className='text-black mb-2'>{t('instruction3')}</li>
          <li className='text-black mb-2'>{t('instruction4')}</li>
          <li className='text-black mb-2'>{t('instruction5')}</li>
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
