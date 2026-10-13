import { useEffect, useState } from 'react'
import { Alert, Button, Container } from 'react-bootstrap'
import { Link, useParams } from 'react-router-dom'
import ItemDetail from './ItemDetail.jsx'
import Loader from './Loader.jsx'

function ItemDetailContainer() {
  const { id } = useParams()
  const [product, setProduct] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    setLoading(true)
    setError(null)
    fetch('/productos.json')
      .then((res) => {
        if (!res.ok) throw new Error('No se pudo cargar el producto')
        return res.json()
      })
      .then((data) => {
        const found = data.find((p) => p.id === Number(id))
        if (!found) throw new Error('El producto no existe')
        setProduct(found)
      })
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false))
  }, [id])

  return (
    <Container>
      {loading && <Loader />}
      {error && (
        <Alert variant="danger">
          {error}.{' '}
          <Button as={Link} to="/productos" variant="link" className="p-0 align-baseline">
            Volver a productos
          </Button>
        </Alert>
      )}
      {!loading && !error && product && <ItemDetail product={product} />}
    </Container>
  )
}

export default ItemDetailContainer
