import { Spinner } from 'react-bootstrap'

function Loader() {
  return (
    <div className="text-center py-5">
      <Spinner animation="border" role="status" className="text-coffee" />
      <p className="mt-2">Cargando...</p>
    </div>
  )
}

export default Loader
