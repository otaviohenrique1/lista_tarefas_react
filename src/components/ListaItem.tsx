import { useContext } from 'react';
import { AiFillDelete, AiFillEdit } from 'react-icons/ai';
import { Button, ButtonGroup, Col, FormGroup, Input, Label } from 'reactstrap';
import { TarefaContext } from '../context/tarefaContext';
import { TarefaContextType, TarefaTypes } from '../types/types';
import { Flex } from './Flex';
import ListaItemContainer from './ListaItemContainer';
import { Paragrafo } from './Paragrafo';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

interface ListaItemProps {
  data: TarefaTypes;
}

export default function ListaItem(props: ListaItemProps) {
  const MySwal = withReactContent(Swal);
  const { id, tarefa, feito, criado, atualizado } = props.data;
  const { modoEditar, setModoEditar, editarStatusTarefa, removerTarefa } = useContext(TarefaContext) as TarefaContextType;

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
              onClick={() => editarStatusTarefa(id)} />
            <Label check className="ms-2 form-check-label">Feito</Label>
          </FormGroup>
          <ButtonGroup>
            <Button
              color="primary"
              onClick={() => setModoEditar(!modoEditar)}
              disabled={(feito) ? true : false}
            >
              <Flex alignItems="center" flexDirection="row">
                <AiFillEdit />
                <span className="ms-1">Editar</span>
              </Flex>
            </Button>
            <Button
              color="danger"
              onClick={() => {
                MySwal.fire({
                  title: <p>Remover tarefa</p>,
                  html: <p className="text-center">Deseja remover a tarefa?</p>,
                  icon: "warning",
                  showCancelButton: true,
                  showConfirmButton: true,
                  cancelButtonText: "Não",
                  confirmButtonText: "Sim",
                  customClass: {
                    cancelButton: "btn btn-danger",
                    confirmButton: "btn btn-success",
                  }
                }).then(({isConfirmed}) => {
                  if (isConfirmed) {
                    removerTarefa(id);
                  }
                });
              }}
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
