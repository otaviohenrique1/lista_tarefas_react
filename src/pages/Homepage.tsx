import { Row, Container } from 'reactstrap';
import Titulo from '../components/Titulo';
import { Formulario } from '../components/Formulario';

export default function Homepage() {
  return (
    <Container className="py-5 px-3" fluid>
      <Row>
        <Titulo />
        <Formulario />
        {/*  */}
      </Row>
    </Container>
  )
}
