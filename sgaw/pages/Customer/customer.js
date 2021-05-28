import bootstrap from 'bootstrap/dist/css/bootstrap.css'
import { Select, Form, Label, FormGroup, Input, Button, Row, Col } from 'reactstrap'
import Establishment from '../../components/Establishment'

const Customer = () => {

  return (
    <div>
      <h2>CLIENTES</h2>
      <Form>
        <Row>
          <Col>
            <FormGroup>
              <Label>Categoria:</Label>
              <Input type="select" name="select">

                <option value="0">Lacteas</option>
                <option value="1">No Lacteas</option>
                <option value="2" selected>Alimentos</option>
              </Input>

<select name="select">
  <option value="value1">Value 1</option>
  <option value="value2" selected>Value 2</option>
  <option value="value3">Value 3</option>
</select>

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
            <Establishment />
          </Col>
        </Row>
      </Form>
    </div>
  );
}

export default Customer;