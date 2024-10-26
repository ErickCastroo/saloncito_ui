import { useTranslation } from 'react-i18next'
import Modal from '@/components/Modal'

function CreateClass({ active, toggle }: { active: boolean; toggle: () => void }) {
  const { t } = useTranslation()

  return (
    <Modal active={active} toggle={toggle}>
      <div>
        <h2>{t('createClass')}</h2>
        <p>Introduce el nombre de la clase para crearla.</p>
        <input type='text' placeholder='Nombre de clase' className='border p-2 mt-2' />
      </div>
    </Modal>
  )
}

export { CreateClass }
