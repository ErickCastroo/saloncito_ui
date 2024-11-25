import { FC, ReactNode, useState } from 'react'

type AcordionProps = {
  title: string; 
  children: ReactNode; 
  customClass?: string;
}

const Acordion: FC<AcordionProps> = ({ title, children, customClass = '' }) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className={`border-b ${customClass}`}>
      <button
        className="w-full flex justify-between items-center py-3 px-4 text-left hover:bg-gray-100 focus:outline-none focus:ring"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-controls={`accordion-content-${title}`}
      >
        <span className="font-medium">{title}</span>
        <span>{isOpen ? '▲' : '▼'}</span>
      </button>
      <div
        id={`accordion-content-${title}`}
        className={`overflow-hidden transition-[max-height] duration-300 ${
          isOpen ? 'max-h-96' : 'max-h-0'
        }`}
      >
        <div className="px-4 py-2 text-gray-700">{children}</div>
      </div>
    </div>
  )
}

export { Acordion }
