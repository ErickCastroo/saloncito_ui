import { HiOutlinePlus } from 'react-icons/hi2'

function ClassButton() {
  return (
    <button
      type='button'
      className='bg-secondary text-secondary absolute bottom-0 right-0 rounded-full text-3xl p-3 mb-6 mr-6 z-10'
    >
      <HiOutlinePlus />
    </button>
  )
}

export { ClassButton }