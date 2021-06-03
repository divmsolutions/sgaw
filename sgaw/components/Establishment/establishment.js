// import bootstrap from 'bootstrap/dist/css/bootstrap.css'
// import { Form, Label, FormGroup, Input, Button, Row, Col } from 'reactstrap'
import { Table } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import customer from '../../pages/Customer/customer'

const Establishment = (props) => {

  const establishmentData = [
    // {
    //   nombreEstablecimiento: "El Mariscal",
    //   cuitEstablecimiento: "23219492457",
    //   direccionEstablecimiento: "Santa Fe"
    // },
    // {
    //   nombreEstablecimiento: "Plumas Verdes",
    //   cuitEstablecimiento: "22193912571",
    //   direccionEstablecimiento: "Comodoro Rivadavia"
    // },
    // {
    //   nombreEstablecimiento: "La Catalina",
    //   cuitEstablecimiento: "21116226629",
    //   direccionEstablecimiento: "Arroyito"
    // }

  ];

  // const { handleSubmit } = props;

  const renderEstablishment = (data, index) => {
    return (
      <tr key={index}>
        <td>{index + 1}</td>
        <td>{data.nombreEstablecimiento}</td>
        <td>{data.cuitEstablecimiento}</td>
        <td>{data.direccionEstablecimiento}</td>
      </tr>
    )
  }

  return (
    <>
      <Table>
        <thead>
          <tr>
            <th>#</th>
            <th>Establecimiento</th>
            <th>CUIT</th>
            <th>Dirección</th>
          </tr>
        </thead>
        <tbody>
          {renderEstablishment(props)}
          {/* {establishmentData.map(renderEstablishment)} */}
        </tbody>
      </Table>
      {/* <button onClick={handleSubmit}>Agregar</button> */}
    </>
  );
}

export default Establishment;