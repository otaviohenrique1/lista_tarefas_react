import { Col } from 'reactstrap';
import { FormataData } from '../utils/Formatador';

interface ListaItemDataProps {
  label: string;
  data: Date;
}

export default function ListaItemData(props: ListaItemDataProps) {
  const { label, data } = props;

  return (
    <Col sm={12} md={6} className="m-0 p-0">
      <div className="rounded border py-1 px-2 m-1">
        <span className="me-1">{label}</span>
        <span>{FormataData(data)}</span>
      </div>
    </Col>
  );
}
