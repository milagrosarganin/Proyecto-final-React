import { Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <header className="site-header">
      <Container className="d-flex flex-column flex-md-row align-items-center justify-content-between py-3">
        <Link to="/" className="brand text-decoration-none">
          ☕ Grano &amp; Taza
        </Link>
        <p className="mb-0 small header-tagline">Café de especialidad y accesorios · Envíos a todo el país</p>
      </Container>
    </header>
  )
}

export default Header
