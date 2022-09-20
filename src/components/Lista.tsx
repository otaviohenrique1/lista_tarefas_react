import React, { useContext } from 'react'
import { Col, ListGroup, ListGroupItem, Row } from 'reactstrap'
import { TarefaContext } from '../context/tarefaContext';
import { TarefaContextType } from '../types/types';

export default function Lista() {
  const { tarefas } = useContext(TarefaContext) as TarefaContextType;

  return (
    <Col sm={12}>
      <ListGroup>
        {(tarefas.length === 0)
          ? (
            <ListGroupItem>
              <h5 className="text-center">Lista vazia</h5>
            </ListGroupItem>
          ) : (
            tarefas.map((item, index) => (
              <ListGroupItem key={index}>
                <Row></Row>
              </ListGroupItem>
            ))
          )}
      </ListGroup>
    </Col>
  )
}
