import { useContext } from 'react';
import { AiFillDelete, AiFillEdit } from 'react-icons/ai';
import { Button, ButtonGroup, Col, Input, Label } from 'reactstrap';
import { TarefaContext } from '../context/tarefaContext';
import { TarefaContextType, TarefaTypes } from '../types/types';
import { Flex } from './Flex';
import { Paragrafo } from './Paragrafo';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

interface ListaItemDadosProps {
  data: TarefaTypes;
  modoEditar: boolean;
  setModoEditar: (value: React.SetStateAction<boolean>) => void;
}

export default function ListaItemDados(props: ListaItemDadosProps) {
  const MySwal = withReactContent(Swal);
  const { id, tarefa, feito } = props.data;
  const { editarStatusTarefa, removerTarefa } = useContext(TarefaContext) as TarefaContextType;

  return (
    <>
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
          <Label className="rounded border py-2 px-2">
            <Flex flexDirection="row">
              <Input
                className="my-0 form-check"
                type="checkbox"
                id={`feito-checkbox-${id}`}
                label="Feito"
                checked={feito}
                onClick={() => editarStatusTarefa(id)}
              />
              <span className="ms-2">Feito</span>
            </Flex>
          </Label>
          <ButtonGroup>
            <Button
              color="primary"
              onClick={() => props.setModoEditar(!props.modoEditar)}
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
                  buttonsStyling: true,
                  customClass: {
                    cancelButton: "btn btn-danger",
                    confirmButton: "btn btn-success",
                  }
                }).then(({ isConfirmed }) => {
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
    </>
  );
}
