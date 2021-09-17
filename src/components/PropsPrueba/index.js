function Saludo(props) {

    return (
   
      <div>
   
          <h1>{props.titulo}</h1>
          {props.children}
          <h1>{props.subtitulo}</h1>
         
      </div>
   
    );
   
   }
   
    
   
   export default Saludo;	