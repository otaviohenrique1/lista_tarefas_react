import { ReactNode } from 'react';
import { Col, ListGroupItem, Row } from 'reactstrap';
import ListaItemData from './ListaItemData';

interface ListaItemContainerProps {
  criado: Date;
  atualizado: Date;
  children: ReactNode;
}

export default function ListaItemContainer(props: ListaItemContainerProps) {
  const { children, criado, atualizado } = props;

  return (
    <ListGroupItem>
      <Row>
        {children}
        <Col sm={12} className="d-flex flex-row align-items-center justify-content-end mt-2 px-2">
          <Row className="m-0 p-0 w-100">
            <ListaItemData
              label="Criado em:"
              data={criado}
            />
            <ListaItemData
              label="Modificado em:"
              data={atualizado}
            />
          </Row>
        </Col>
      </Row>
    </ListGroupItem>
  );
}
