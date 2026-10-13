import { Card } from 'react-bootstrap'

function TeamCard({ nombre, rol, email, inicial }) {
  return (
    <Card className="team-card h-100 text-center">
      <Card.Body>
        <div className="team-avatar mx-auto mb-2">{inicial}</div>
        <Card.Title as="h6" className="mb-1">{nombre}</Card.Title>
        <Card.Subtitle className="small mb-2 team-role">{rol}</Card.Subtitle>
        <Card.Text className="small mb-0 text-break">{email}</Card.Text>
      </Card.Body>
    </Card>
  )
}

export default TeamCard
