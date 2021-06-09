import { Form, Label, FormGroup, Input, Row, Col, Table, Button } from 'reactstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

const CustomerPS = () => {
  return (
    <div>
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
    </div >
  );
}

export default CustomerPS;