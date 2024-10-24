import { FC, ReactNode } from 'react'

type ModalProps = {
  modalOpen: boolean
  onClose: () => void
  children: ReactNode
}

const Modal: FC<ModalProps> = ({modalOpen, onClose, children}) => {
  return (
    <div
      className={`fixed inset-0 flex justify-center items-center transition-colors cursor-default ${modalOpen ? 'visible bg-black bg-opacity-30' : 'invisible'}`}
      onClick={onClose}
    >
      <div
        className={`bg-white rounded-lg shadow p-6 max-w-md ${modalOpen ? 'scale-100 opacity-100' : 'scale-110 opacity-0'}`}
        onClick={(e) => e.stopPropagation()}
      >
        <button
        className='absolute top-2 right-2 py-1 px-2 border border-neutral-200 rounded-md text-gray-400 bg-white hover:bg-gray-50 hover:text-gray-600'
        onClick={onClose}
        >
          X
        </button>
        {children}
      </div>
    </div>
  )
}

export { Modal }