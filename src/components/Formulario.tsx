import { FormTypes, TarefaContextType } from "../types/types";
import { Button, ButtonGroup, Col, FormGroup, Label } from "reactstrap";
import { ErrorMessage, Field, Form, Formik, FormikHelpers } from "formik";
import { Flex } from "./Flex";
import { MdOutlineAddCircleOutline } from "react-icons/md";
import { AiOutlineClear } from "react-icons/ai";
import { useContext } from "react";
import { TarefaContext } from "../context/tarefaContext";
import { validationSchema } from "../utils/constantes";

const initialValues: FormTypes = {
  tarefa: ""
};

export function Formulario() {
  const { criarTarefa } = useContext(TarefaContext) as TarefaContextType;

  return (
    <Col sm={12} className="mb-2">
      <div className="rounded border p-3">
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={(values: FormTypes, helpers: FormikHelpers<FormTypes>) => {
            criarTarefa(values.tarefa);
            helpers.resetForm();
          }}
        >
          {({ values }) => (
            <Form>
              <FormGroup>
                <Label htmlFor="tarefa">Nova tarefa</Label>
                <Field
                  as="textarea"
                  name="tarefa"
                  id="tarefa"
                  className="form-control"
                  placeholder="Digite a tarefa"
                  value={values.tarefa}
                  rows={1}
                />
                <ErrorMessage
                  name="tarefa"
                  component="span"
                  className="text-danger"
                />
              </FormGroup>
              <Flex alignItems="center" justifyContent="end">
                <ButtonGroup className="mt-2">
                  <Button
                    color="primary"
                    type="submit"
                  >
                    <Flex alignItems="center" flexDirection="row">
                      <MdOutlineAddCircleOutline size={20} />
                      <span className="ms-1">Criar</span>
                    </Flex>
                  </Button>
                  <Button
                    color="danger"
                    type="reset"
                  >
                    <Flex alignItems="center" flexDirection="row">
                      <AiOutlineClear size={20} color="#ffffff" />
                      <span className="ms-1">Limpar</span>
                    </Flex>
                  </Button>
                </ButtonGroup>
              </Flex>
            </Form>
          )}
        </Formik>
      </div>
    </Col>
  )
}

