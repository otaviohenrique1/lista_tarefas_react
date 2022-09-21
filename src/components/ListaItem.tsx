import { AiFillDelete, AiFillEdit } from 'react-icons/ai';
import { Button, ButtonGroup, Col, FormGroup, Input, Label } from 'reactstrap';
import { TarefaTypes } from '../types/types';
import { Flex } from './Flex';
import ListaItemContainer from './ListaItemContainer';
import { Paragrafo } from './Paragrafo';

interface ListaItemProps {
  data: TarefaTypes;
}

export default function ListaItem(props: ListaItemProps) {
  const { id, tarefa, feito, criado, atualizado } = props.data;

  return (
    <ListaItemContainer criado={criado} atualizado={atualizado}>
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
    </ListaItemContainer>




  );
}
