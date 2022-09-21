import { ErrorMessage, Field, Form, Formik, FormikHelpers } from 'formik';
import { AiFillDelete, AiFillEdit } from 'react-icons/ai';
import { MdOutlineCancel } from 'react-icons/md';
import { Button, ButtonGroup, Col, FormGroup } from 'reactstrap';
import { FormTypes, TarefaTypes } from '../types/types';
import { validationSchema } from '../utils/constantes';
import { Flex } from './Flex';
import ListaItemContainer from './ListaItemContainer';

interface ListaItemEdicaoProps {
  data: TarefaTypes;
}

export default function ListaItemEdicao(props: ListaItemEdicaoProps) {
  const { id, tarefa, criado, atualizado } = props.data;
  
  const initialValues: FormTypes = {
    tarefa: tarefa || "",
  };

  return (
    <ListaItemContainer criado={criado} atualizado={atualizado}>
      <Col sm={12} className="mt-2 mb-4">
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={(values: FormTypes, helpers: FormikHelpers<FormTypes>) => {}}
        >
          <Form>
            <FormGroup>
              <Field
                component="textarea"
                className="form-control"
                id={`editar_tarefa_${id}`}
                name={`editar_tarefa_${id}`}
                placeholder="Digite a tarefa"
                value={tarefa}
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
                  // type="submit"
                  type="button"
                >
                  <Flex alignItems="center" flexDirection="row">
                    <AiFillEdit />
                    <span className="ms-1">Salvar</span>
                  </Flex>
                </Button>
                <Button
                  color="danger"
                  onClick={() => { }}
                >
                  <Flex alignItems="center" flexDirection="row">
                    <AiFillDelete />
                    <span className="ms-1">Limpar</span>
                  </Flex>
                </Button>
                <Button
                  color="secondary"
                  type="button"
                  onClick={() => { }}
                >
                  <Flex alignItems="center" flexDirection="row">
                    <MdOutlineCancel />
                    <span className="ms-1">Cancelar</span>
                  </Flex>
                </Button>
              </ButtonGroup>
            </Flex>
          </Form>
        </Formik>
      </Col>
    </ListaItemContainer>
  );
}
