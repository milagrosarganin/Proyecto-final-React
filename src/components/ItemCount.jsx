import { useState } from 'react'
import { Button, ButtonGroup } from 'react-bootstrap'

function ItemCount({ stock, initial = 1, onAdd }) {
  const [count, setCount] = useState(initial)

  return (
    <div className="d-flex gap-3 align-items-center flex-wrap">
      <ButtonGroup aria-label="Cantidad">
        <Button variant="outline-dark" onClick={() => setCount(count - 1)} disabled={count <= 1}>−</Button>
        <span className="px-3 d-flex align-items-center border border-dark">{count}</span>
        <Button variant="outline-dark" onClick={() => setCount(count + 1)} disabled={count >= stock}>+</Button>
      </ButtonGroup>
      <Button variant="dark" className="btn-coffee" onClick={() => onAdd(count)} disabled={stock === 0}>
        Agregar al carrito
      </Button>
    </div>
  )
}

export default ItemCount
