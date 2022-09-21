import { AiFillDelete, AiFillEdit } from 'react-icons/ai';
import { Button, ButtonGroup, Col, FormGroup, Input, Label, ListGroupItem, Row } from 'reactstrap';
import { TarefaTypes } from '../types/types';
import { FormataData } from '../utils/Formatador';
import { Flex } from './Flex';
import { Paragrafo } from './Paragrafo';

interface ListaItemProps {
  data: TarefaTypes;
}

export default function ListaItem(props: ListaItemProps) {
  const { id, tarefa, feito, criado, atualizado } = props.data;

  return (
    <ListGroupItem>
      <Row>
        <Col sm={12} className="my-2">
          <Paragrafo
            feito={feito}
            className="form-control bg-secondary bg-opacity-10"
          >{tarefa}</Paragrafo>
        </Col>
        <Col sm={12}>
          <Flex
            flexDirection="row"
            alignItems="center"
            justifyContent="space-between"
          >
            <FormGroup check className="rounded border py-1 px-2">
              <Input
                className="my-0 form-check"
                type="checkbox"
                id={`feito-checkbox-${id}`}
                label="Feito"
                checked={feito}
                onClick={() => { }} />
              <Label check className="ms-2 form-check-label">Feito</Label>
            </FormGroup>
            <ButtonGroup>
              <Button
                variant="primary"
                onClick={() => { }}
                disabled={(feito) ? true : false}
              >
                <Flex alignItems="center" flexDirection="row">
                  <AiFillEdit />
                  <span className="ms-1">Editar</span>
                </Flex>
              </Button>
              <Button
                variant="danger"
                onClick={() => { }}
                disabled={(feito) ? true : false}
              >
                <Flex alignItems="center" flexDirection="row">
                  <AiFillDelete />
                  <span className="ms-1">Remover</span>
                </Flex>
              </Button>
            </ButtonGroup>
          </Flex>
        </Col>
        <Col sm={12} className="d-flex flex-row align-items-center justify-content-end mt-2 px-2">
          <Row className="m-0 p-0 w-100">
            <Col sm={12} md={6} className="m-0 p-0">
              <div className="rounded border py-1 px-2 m-1">
                <span className="me-1">Criado em:</span>
                <span>{FormataData(criado)}</span>
              </div>
            </Col>
            <Col sm={12} md={6} className="m-0 p-0">
              <div className="rounded border py-1 px-2 m-1">
                <span className="me-1">Modificado em:</span>
                <span>{FormataData(atualizado)}</span>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </ListGroupItem>
  );
}
