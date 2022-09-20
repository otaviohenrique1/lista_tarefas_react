import React from 'react'
import { Col, Row, Container, ButtonGroup, Button, FormGroup, Label, ListGroup } from 'reactstrap';
import { Flex } from '../components/Flex';
import { MdOutlineAddCircleOutline } from 'react-icons/md';
import { AiFillDelete, AiFillEdit, AiOutlineClear } from 'react-icons/ai';
import { FormTypes } from '../types/types';
import { FormikHelpers } from 'formik/dist/types';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import Titulo from '../components/Titulo';
import { Formulario } from '../components/Formulario';

export default function Homepage() {
  return (
    <Container className="py-5 px-3" fluid>
      <Row>
        <Titulo />
        <Formulario />
        <Col sm={12}>
          <ListGroup></ListGroup>
        </Col>
      </Row>
    </Container>
  )
}
