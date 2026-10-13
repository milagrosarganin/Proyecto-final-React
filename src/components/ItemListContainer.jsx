import { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap'
import ItemList from './ItemList.jsx'

function ItemListContainer() {
  const [products, setProducts] = useState([])

  useEffect(() => {
    fetch('/productos.json')
      .then((res) => res.json())
      .then((data) => setProducts(data))
  }, [])

  return (
    <Container>
      <h1 className="page-title mb-4">Productos</h1>
      <ItemList products={products} />
    </Container>
  )
}

export default ItemListContainer
