import { useParams } from 'react-router-dom'

function ViewTrabajo() {
  const { classId, trabajoId } = useParams()
  console.log(classId, trabajoId)
  return (
    <div>ViewTrabajo</div>
  )
}

export { ViewTrabajo }