import { useState } from 'react'
import { JoinClass } from '@/components/Modal/Modals/JoinClass'
import { CreateClass } from '@/components/Modal/Modals/CreateClass'
import { useTranslation } from 'react-i18next'
import { HiOutlinePlus } from 'react-icons/hi2'

function ClassButton() {
  const { t } = useTranslation()

  const [isCardVisible, setIsCardVisible] = useState<boolean>(false)
  const [isCreateClassActive, setCreateClassActive] = useState(false)
  const [isJoinClassActive, setJoinClassActive] = useState(false)

  const toggleCardVisibility = () => {
    setIsCardVisible(!isCardVisible)
  }

  return (
    <>
      {isCardVisible && (
        <div className='absolute flex flex-col bottom-14 right-8 bg-white text-xl p-3 mb-6 mr-6 rounded-md'>
          <button
            onClick={() => setJoinClassActive(true)}
            className='text-left px-4 py-2 w-full rounded-sm hover:bg-blue-50 flex items-center'
          >
            {t('joinClass')}
          </button>
          <JoinClass active={isJoinClassActive} toggle={() => setJoinClassActive(false)} />

          <button
            onClick={() => setCreateClassActive(true)}
            className='text-left px-4 py-2 w-full rounded-sm hover:bg-blue-50 flex items-center'
          >
            {t('createClass')}
          </button>
          <CreateClass active={isCreateClassActive} toggle={() => setCreateClassActive(false)} />
        </div>
      )}
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
