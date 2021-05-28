import bootstrap from 'bootstrap/dist/css/bootstrap.css'
import { Form, Label, FormGroup, Input, Button, Row, Col, Table } from 'reactstrap'
import { useState } from 'react'

const Establishment = () => {

  const initialValuesEstablishment = {
    nombreEstablecimiento: "",
    cuitEstablecimiento: "",
    direccionEstablecimiento: "",
    // localidadEstablecimiento="",
    // provinciaEstablecimiento="",
    // tipoEstablecimiento=""
  }

  const [values, setValues] = useState(initialValuesEstablishment);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    console.log(name, value)
    setValues({ ...values, [name]: value })
  }

  const myTable = Table.tabla; //document.querySelector("table"); 

  const addEstablishment = () => {
    var row = myTable.insertRow(myTable.rows.length);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
  
    cell1.innerHTML = '<input type="text">';
    cell2.innerHTML = '<input type="text">';;
    cell3.innerHTML = '<input type="text">';;
   


  }

  return (
    <>
      <FormGroup>
        <Label>Establecimiento:</Label>
        <Input type="text" name="nombreEstablecimiento" onChange={handleInputChange}></Input>
        <Label>Cuit Establecimiento:</Label>
        <Input type="text" name="cuitEstablecimiento" onChange={handleInputChange}></Input>
        <Label>Dirección Establecimiento:</Label>
        <Input type="text" name="direccionEstablecimiento" onChange={handleInputChange}></Input>
        <button className="addEstablishment" onClick={addEstablishment}>Agregar</button>
      </FormGroup>

      <Table className="table" name="tabla" borderless>

        <thead>
          <tr>
            <th>#</th>
            <th>Establecimiento</th>
            <th>CUIT</th>
            <th>Dirección</th>
          </tr>
        </thead>
        <tbody>
        <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Larry</td>
            <td>the Bird</td>
            <td>@twitter</td>
          </tr>
        </tbody>
      </Table>
    </>
  );
}

export default Establishment;