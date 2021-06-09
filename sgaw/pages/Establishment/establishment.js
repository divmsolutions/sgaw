import { Form, Label, FormGroup, Input, Row, Col, Table, Button, Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from 'reactstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import { useState, useEffect } from 'react'
import EstablishmentForCustomer from '../Customer/customer'
import { db } from '../../../backend/initfirebase'
import styles from '../../styles/Home.module.css'


const Establishment = (props) => {

  // const addOrEditEstablishment = async (dataEstablishment) => {
  //   await db.collection('establecimientos').doc().set(dataEstablishment);
  // }

  // const initialValues = {
  //   nombreEstablecimiento: "",
  //   cuitEstablecimiento: "",
  //   direccionEstablecimiento: ""
  // }

  // const [values, setValues] = useState(initialValues);
  // const [clientes, setClientes] = useState([]);


  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("values", values);
    props.addOrEditEstablishment(values);

    setValues({ ...initialValues })
  }

  // const getClientes = async () => {
  //   db.collection('clientes').onSnapshot((consultarCliente) => {
  //     const docs = []
  //     consultarCliente.forEach(doc => {
  //       docs.push({ ...doc.data(), id: doc.id })
  //     })
  //     setClientes(docs)
  //   })

  // }

  // useEffect(() => {
  //   getClientes()
  // }, [])


  const [dropdown, setDropdown] = useState(false)

  const toggle = () => {
    setDropdown(cambiarEstado => !dropdown)
  }


  // const toggle = () => setDropdownOpen(prevState => !prevState);


  return (
    <div className={styles.container}>
      <Col xs="6">
        <FormGroup className={styles.card}>

          <Dropdown isOpen={dropdown} toggle={toggle}>
            <DropdownToggle caret>
              Buscar Clientes
      </DropdownToggle>
            <DropdownMenu>
              <DropdownItem header>Header</DropdownItem>
              <DropdownItem>Some Action</DropdownItem>
              <DropdownItem text>Dropdown Item Text</DropdownItem>
              <DropdownItem disabled>Action (disabled)</DropdownItem>
              <DropdownItem divider />
              <DropdownItem>Foo Action</DropdownItem>
              <DropdownItem>Bar Action</DropdownItem>
              <DropdownItem>Quo Action</DropdownItem>
            </DropdownMenu>
          </Dropdown>

          <Label>Nombre:</Label>
          <Input type="text" name="nombreEstablecimiento" onChange={handleInputChange}></Input>
          <Label>Cuit:</Label>
          <Input type="text" name="cuitEstablecimiento" onChange={handleInputChange}></Input>
          <Label>Dirección:</Label>
          <Input type="text" name="direccionEstablecimiento" onChange={handleInputChange}></Input>
          <div>
            <button onClick={handleSubmit}>click me</button>
          </div>
        </FormGroup>
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
            {/* <Establishment {...values} />  */}
          </tbody>
        </Table>
      </Col>
    </div>
  )
}

export default Establishment;