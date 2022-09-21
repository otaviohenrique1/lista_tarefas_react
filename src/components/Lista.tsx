import { useContext } from 'react'
import { Col, ListGroup } from 'reactstrap'
import { TarefaContext } from '../context/tarefaContext';
import { TarefaContextType } from '../types/types';
import ListaItem from './ListaItem';
import ListaItemVazio from './ListaItemVazio';

export default function Lista() {
  const { tarefas } = useContext(TarefaContext) as TarefaContextType;

  return (
    <Col sm={12}>
      <ListGroup>
        {(tarefas.length === 0)
          ? (
            <ListaItemVazio />
          ) : (
            tarefas.map((item, index) => (
              <ListaItem
                key={index}
                data={item}
              />
            ))
          )}
      </ListGroup>
    </Col>
  )
}
