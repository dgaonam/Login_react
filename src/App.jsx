

import GenericForm from "./components/GenericForm";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card } from "react-bootstrap";
import StoreProvider from "./store/StoreProvider";


const elemntos={
  title:"Login ejemplo",
  elements: [{
    type:"text",
    clase:"form-floating mb-3",
    name:"txtUser",
    id:"txtUser",
    placholder:"",
    valor:"",
    text:"Usuario"
  },{
    type:"text",
    clase:"form-floating mb-3",
    name:"txtEjemplo",
    id:"txtEjemplo",
    placholder:"",
    valor:"",
    text:"Contraseña"
  },{type:"button",
  clase:"mb-ejemplo",
  name:"btnEjemplo",
  id:"btnEjemplo",
  placholder:"",
  text:"Ingresar"}
]
}

function App() {
  return (
    <div>
      <StoreProvider>
        <Card style={{ width: '18rem' }}>
          <Card.Body>
              <GenericForm componentes={elemntos}/>
          </Card.Body>
        </Card>
      </StoreProvider>  
    </div>
  );
}

export default App;
