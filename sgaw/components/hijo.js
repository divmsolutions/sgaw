const Hijo = (props) => {
  const nombre = "Robertito"
  const apellido = "Torres"

  const [dataHijo, setDataHijo] = useState(initialState)
  
  const dataHijo = [
    nombre,
    apellido
  ];

  const mostrarHijo = () => {
    dataHijo
  }
  
  return ( 
    <div>
      {/* {dataHijo} */}
    </div>
   );
}

export default Hijo;
