import bootstrap from 'bootstrap/dist/css/bootstrap.css'
import { Form, Label, FormGroup, Input, Button, Row, Col, Table } from 'reactstrap'

const Establishment = () => {
    return (
        <>
        <h1>HOLA SOY CLAUDiO y estoy con LAURA</h1>
        <h2>PRUEBA DE GIT</h2>
            <Table borderless>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Username</th>
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