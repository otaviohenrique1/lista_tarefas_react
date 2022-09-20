import { FaTasks } from 'react-icons/fa'
import { Col } from 'reactstrap'
import { Flex } from './Flex'

export default function Titulo() {
  return (
    <Col sm={12} className="mb-5">
      <Flex
        alignItems="center"
        justifyContent="center"
        flexDirection="row"
      >
        <FaTasks size={30} />
        <h1 className="ms-3 mb-0">Lista de Tarefas</h1>
      </Flex>
    </Col>
  )
}
