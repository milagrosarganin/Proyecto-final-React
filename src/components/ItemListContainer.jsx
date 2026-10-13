import { useEffect, useState } from 'react'
import { Alert, Container } from 'react-bootstrap'
import ItemList from './ItemList.jsx'
import Loader from './Loader.jsx'

function ItemListContainer() {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    fetch('/productos.json')
      .then((res) => {
        if (!res.ok) throw new Error('No se pudieron cargar los productos')
        return res.json()
      })
      .then((data) => setProducts(data))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false))
  }, [])

  return (
    <Container>
      <h1 className="page-title mb-4">Productos</h1>
      {loading && <Loader />}
      {error && <Alert variant="danger">{error}</Alert>}
      {!loading && !error && <ItemList products={products} />}
    </Container>
  )
}

export default ItemListContainer
