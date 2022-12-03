import axios from "axios";
import React from "react";
import { useContext } from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Button } from "react-bootstrap";
import axiosConfig from "../config/axiosConfig";
import {StoreContext} from "../store/StoreProvider";


const GenericForm = ({ componentes }) => {

    const [user,setUser] = useState('');
    const [password,setPassword] = useState('');
    const [store,dispatch] = useContext(StoreContext);
    const usuarios = store;
    
    const addComponent = (elemento) => {
        if (elemento.type === "text") return (
            <div class={elemento.clase}>
                <input type={elemento.type} class="form-control" id={elemento?.id} name={elemento?.name} value={elemento?.valor} />
                <label for={elemento?.id}>{elemento?.text}</label>
            </div>);
        if (elemento.type === "button") return (<Button >{elemento.text}</Button>);
    
        console.log(elemento.type);
    }
    
    const Entrar = () => {
        axiosConfig.post('/api/login',{usuario: usuarios.login,password: password}).then(data => {
            console.log(data);
        }).catch(error => {
            console.log("xxxx");
        });
    };
    
    const onhandleClick=()=>{
        console.log("Click en boton de entar");
        if( (user!=="") && (password!=="") ){
            Entrar();
        }
    }
     

   /* useEffect(() => {
        Entrar();
    });*/
    return (
        <>
                <h1>Nombre: {usuarios?.name}</h1>
                <div className="form-floating mb-3">
                    <input type="text" className="form-control" id="floatingInput" placeholder="Ingresa usuario" onChange={(e)=>{setUser(e.target.value)}} />
                        <label htmlFor="floatingInput">Usuario</label>
                </div>
                <div className="form-floating">
                    <input type="password" className="form-control" id="floatingPassword" placeholder="Ingresa contraseña" onChange={(e)=>{setPassword(e.target.value)}}  />
                        <label htmlFor="floatingPassword">Contraseña</label>
                </div>
                <Button onClick={onhandleClick}>Entrar</Button>
        </>
    );
}

export default GenericForm;