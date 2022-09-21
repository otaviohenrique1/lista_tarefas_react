import { ErrorMessage, Field, Form, Formik, FormikHelpers } from 'formik';
import { useContext, useEffect, useState } from 'react';
import { AiFillDelete, AiFillEdit } from 'react-icons/ai';
import { MdOutlineCancel } from 'react-icons/md';
import { Button, ButtonGroup, Col, FormGroup } from 'reactstrap';
import { TarefaContext } from '../context/tarefaContext';
import { FormTypes, TarefaContextType, TarefaTypes } from '../types/types';
import { validationSchema } from '../utils/constantes';
import { Flex } from './Flex';

interface ListaItemEdicaoProps {
  data: TarefaTypes;
  modoEditar: boolean;
  setModoEditar: (value: React.SetStateAction<boolean>) => void;
}

export default function ListaItemEdicao(props: ListaItemEdicaoProps) {
  const { id, tarefa } = props.data;
  
  const [dataItem, setDataItem] = useState<string>("");
  
  useEffect(() => {
    setDataItem(tarefa)
  }, [tarefa]);

  const { editarNomeTarefa } = useContext(TarefaContext) as TarefaContextType;

  return (
    <>
      <Col sm={12} className="mt-2 mb-4">
        <Formik
          initialValues={{ tarefa: dataItem || "" }}
          validationSchema={validationSchema}
          enableReinitialize
          onSubmit={(values: FormTypes, helpers: FormikHelpers<FormTypes>) => {
            editarNomeTarefa(id, values.tarefa);
            props.setModoEditar(!props.modoEditar);
          }}
        >
          {({ values }) => (
            <Form>
              <FormGroup>
                <Field
                  component="textarea"
                  className="form-control"
                  id={`editar_tarefa_${id}`}
                  name={`editar_tarefa_${id}`}
                  placeholder="Digite a tarefa"
                  value={values.tarefa}
                  rows={1}
                />
                <ErrorMessage
                  name={`editar_tarefa_${id}`}
                  component="span"
                  className="text-danger"
                />
              </FormGroup>
              <Flex
                flexDirection="row"
                alignItems="center"
                justifyContent="end"
              >
                <ButtonGroup>
                  <Button
                    color="primary"
                    type="submit"
                  >
                    <Flex alignItems="center" flexDirection="row">
                      <AiFillEdit />
                      <span className="ms-1">Salvar</span>
                    </Flex>
                  </Button>
                  <Button
                    color="danger"
                    type="reset"
                  >
                    <Flex alignItems="center" flexDirection="row">
                      <AiFillDelete />
                      <span className="ms-1">Limpar</span>
                    </Flex>
                  </Button>
                  <Button
                    color="secondary"
                    type="button"
                    onClick={() => props.setModoEditar(!props.modoEditar)}
                  >
                    <Flex alignItems="center" flexDirection="row">
                      <MdOutlineCancel />
                      <span className="ms-1">Cancelar</span>
                    </Flex>
                  </Button>
                </ButtonGroup>
              </Flex>
            </Form>
          )}
        </Formik>
      </Col>
    </>
  );
}
