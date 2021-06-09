import { Form, Label, FormGroup, Input, Row, Col, Table, Button } from 'reactstrap'
// import { } from 'react-bootstrap'
import Establishment from '../Establishment/establishment'
import styles from '../../styles/Home.module.css'

import 'bootstrap/dist/css/bootstrap.min.css';
import { useState, useEffect } from 'react';
import Link from 'next/link'

const Customer = (props) => {
  const initialValues = {
    nombreEstablecimiento: "",
    cuitEstablecimiento: "",
    direccionEstablecimiento: ""
  }

  const [values, setValues] = useState(initialValues);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("values", values);
    props.addOrEditCustomer(values);

    setValues({ ...initialValues })
  }

  return (
    <div>

      <header>
        <h1 className={styles.title}>
          Registrar <a href="https://nextjs.org">CLIENTE</a>
        </h1>
      </header>

      <main  className={styles.card}>
        <Form>
          <Row>
            <Col>
              <FormGroup>
                <Label>Categoria:</Label>
                <Input type="select" name="select"></Input>
                <Label>Razón Social:</Label>
                <Input type="text" name="nombre_cliente"></Input>
                <Label>Cuit:</Label>
                <Input type="text" name="cuit_cliente"></Input>
                <Label>Dirección:</Label>
                <Input type="text" name="direccion_cliente"></Input>
                <Label>Teléfono:</Label>
                <Input type="text" name="telefono_cliente"></Input>
                <Label>Responsable:</Label>
                <Input type="text" name="responsable_cliente"></Input>
              </FormGroup>
            </Col>
            <Col xs="6">
              <Link href="/Establishment/establishment">
                <a>Establecimientos</a>
              </Link>

            </Col>
          </Row>
        </Form>
      </main>
    </div>
  );
}

export default Customer;