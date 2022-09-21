import { useContext } from 'react'
import { Col, ListGroup } from 'reactstrap'
import { TarefaContext } from '../context/tarefaContext';
import { TarefaContextType } from '../types/types';
import ListaItemVazio from './ListaItemVazio';
import ListaItem from './ListaItem';

export default function Lista() {
  const { tarefas } = useContext(TarefaContext) as TarefaContextType;

  return (
    <Col sm={12}>
      <ListGroup>
        {(tarefas.length === 0)
          ? <ListaItemVazio />
          : tarefas.map((item, index) => <ListaItem key={index} data={item} />)
        }
      </ListGroup>
    </Col>
  )
}
