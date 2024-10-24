import { useState } from 'react'

import { useTranslation } from 'react-i18next'

import { Modal } from '@/components/Modal'

import { HiOutlinePlus } from 'react-icons/hi2'

function ClassButton() {

  const { t } = useTranslation()

  const [isCardVisible, setIsCardVisible] = useState<boolean>(false)
  const [modalOpen, setModalOpen] = useState<boolean>(false)

  const toggleCardVisibility = () => {
    setIsCardVisible(!isCardVisible)
  }
  const handleModalClose = () => setModalOpen(false)


  return (
    <>
      {
        isCardVisible && (
          <div className="absolute flex flex-col bottom-14 right-8 bg-white text-xl p-3 mb-6 mr-6 rounded-md">
            <button
              className="text-left px-4 py-2 w-full rounded-sm hover:bg-blue-50"
              onClick={() => setModalOpen(true)}
            >
              {t('joinClass')}
            </button>
            <Modal modalOpen={modalOpen} onClose={() => setModalOpen(false)}>
              <div>
                <h2>{t('joinClass')}</h2>
                <p>Introduce el código de la clase para unirte.</p>
                <input type="text" placeholder="Código de clase" className="border p-2 mt-2" />
                <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded" onClick={handleModalClose}>
                  {t('join')}
                </button>
              </div>
            </Modal>
            <button className="px-4 py-2 w-full rounded-sm hover:bg-blue-50">
              {t('createClass')}
              <Modal modalOpen={modalOpen} onClose={() => setModalOpen(false)}>
                <div>
                  <h2>{t('joinClass')}</h2>
                  <p>Introduce el código de la clase para unirte.</p>
                  <input type="text" placeholder="Código de clase" className="border p-2 mt-2" />
                  <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded" onClick={handleModalClose}>
                    {t('join')}
                  </button>
                </div>
              </Modal>
            </button>
          </div>
        )
      }
      <button
        type='button'
        onClick={toggleCardVisibility}
        className='bg-secondary text-secondary absolute bottom-0 right-0 rounded-full text-3xl p-3 mb-6 mr-6 z-10'
      >
        <HiOutlinePlus />
      </button>

    </>
  )
}

export { ClassButton }