import bootstrap from 'bootstrap/dist/css/bootstrap.css'
import { Form, Label, FormGroup, Input, Button, Row, Col } from 'reactstrap'
import Establishment from '../../components/Establishment'

const Customer = () => {

  return (
    <div>
      <h2>CLIENTES</h2>
      <Form>
        <Row>
          <Col>
            <FormGroup>
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
              <Label>Establecimiento:</Label>
              <Input type="text" name="nombre_establecimiento"></Input>
              <Label>Cuit Establecimiento:</Label>
              <Input type="text" name="cuit_establecimiento"></Input>
              <Label>Dirección Establecimiento:</Label>
              <Input type="text" name="direccion_establecimiento"></Input>
              <Establishment/>
              
            </FormGroup>
          </Col>
        </Row>
      </Form>
    </div>
  );
}

export default Customer;