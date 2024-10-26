import Modal from '@/components/Modal'
import { useTranslation } from 'react-i18next'

function JoinClass({ active, toggle }: { active: boolean; toggle: () => void }) {
  const { t } = useTranslation()

  return (
    <Modal active={active} toggle={toggle}>
      <div>
        <h2>{t('joinClass')}</h2>
        <p>Introduce el código de la clase para unirte.</p>
        <input type='text' placeholder='Código de clase' className='border p-2 mt-2' />
      </div>
    </Modal>
  )
}

export { JoinClass }
