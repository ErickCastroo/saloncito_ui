import { useParams } from 'react-router-dom'

function Trabajos() {

  const { classId } = useParams()

  return (
    <div>Trabajos</div>
  )
}

export { Trabajos }