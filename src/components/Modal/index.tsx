import { Component, ReactNode } from 'react'
import Portal from '@/components/Modal/portal'
import { IoCloseSharp } from 'react-icons/io5'

type ModalProps = {
  children: ReactNode;
  toggle: () => void;
  active: boolean;
}

export default class Modal extends Component<ModalProps>  {
  render() {
    const { children, toggle, active } = this.props

    return (
      <Portal>
        {
          active && (
            <div className='fixed inset-0 flex justify-center items-center transition-colors'>
              <div className='relative  dark:bg-slate-900 text-slate-200 border border-gray-200 dark:border-gray-400 rounded-sm bg-white w-[70%] h-[70%] px-6 py-5  rounded-5 shadow-md'>
                <button onClick={toggle} className='text-black absolute top-0 right-0 bg-transparent border-none text-2xl px-6 py-5 cursor-pointer'>
                  <IoCloseSharp />
                </button>
                {children}
              </div>
            </div>
          )
        }
      </Portal>
    )
  }
}