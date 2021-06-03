import props from './hijo'

const Padre = () => {
  return ( 
    <div> 
      <h1>Hola</h1>
      <props.mostrarHijo} />
    </div>
   );
}
 
export default Padre;