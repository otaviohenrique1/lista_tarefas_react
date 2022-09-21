import React, { useContext } from 'react'
import { AiFillDelete, AiFillEdit } from 'react-icons/ai';
import { Button, ButtonGroup, Col, FormGroup, Input, Label, ListGroup, ListGroupItem, Row } from 'reactstrap'
import { TarefaContext } from '../context/tarefaContext';
import { TarefaContextType } from '../types/types';
import { Flex } from './Flex';
import ListaItem from './ListaItem';
import ListaItemVazio from './ListaItemVazio';
import { Paragrafo } from './Paragrafo';

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
