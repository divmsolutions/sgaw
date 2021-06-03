import { Form, Label, FormGroup, Input, Row, Col, Button } from 'reactstrap'

// import { } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

import Establishment from '../../components/Establishment/establishment'

import { useState } from 'react'

const Customer = (props) => {

  const initialValuesEstablishment = {
    nombreEstablecimiento: ""
    //cuitEstablecimiento: "",
    //direccionEstablecimiento: "",
  }

  const [values, setValues] = useState("");

  /* va tomando la entrada de teclado de los inputs del Formulario */
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    console.log(name, value)
    setValues({ ...values, [name]: value })
    console.log('setValues:', values)
  }
  /* ----------------------------- */

  const handleSubmit = (values) => {
    // e.preventDefault(); /* para cancelar un evento sin tener el funcionamiento del evento, es decir, puede ser llamado nuevamente */
    // alert(e.nombreEstablecimiento)
    // setValues({ ...initialValuesEstablishment })
  }

  return (
    <div>
      <h2>REGISTRAR CLIENTES</h2>
      <Form>
        <Row>
          <Col>
            <FormGroup>
              <Label>Categoria:</Label>
              <Input type="select" name="select">
                {/* <option value="0">Lacteas</option>
                <option value="1">No Lacteas</option>
                <option value="2" selected>Alimentos</option> */}
              </Input>

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

            <FormGroup>
              <Label>Nombre:</Label>
              <Input type="text" name="nombreEstablecimiento" onChange={handleInputChange}></Input>
              <Label>Cuit:</Label>
              <Input type="text" name="cuitEstablecimiento" onChange={handleInputChange}></Input>
              <Label>Dirección:</Label>
              <Input type="text" name="direccionEstablecimiento" onChange={handleInputChange}></Input>
              {/* <Button onClick={() => setInsert(establishment.id)} >Agregar</Button> */}

              {/* <Impresoras {...{addOrEditImpresoras, currentId, impresoras }} /> */}
              <Establishment {...values} />
              {/* <button onClick={props.handleSubmit}>Agregar</button> */}
            </FormGroup>

          </Col>
        </Row>
      </Form>
    </div>
  );
}

export default Customer;