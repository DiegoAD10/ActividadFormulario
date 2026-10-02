import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import App_alert from "../../components/alerts/alert";


function Formulario() {

    const [txtNombre, setTxtNombre] = useState("");
    const [txtApellido, setTxtApellido] = useState("");
    const [txtRut, setTxtRut] = useState(0);
    const [txtDv, setTxtDv] = useState("");
    const [txtFechaNac, setTxtFechaNac] = useState(Date);
    const [txtCorreo, setTxtCorreo] = useState("");
    const [txtTelefono, setTxtTelefono] = useState("");
    const [txtDireccion, setTxtDireccion] = useState("");

    const [mostrarAlerta, setMostrarAlerta] = useState(false);
    const [mensajeAlerta, setMensajeAlerta] = useState("");
    const [tipoAlerta, setTipoAlerta] = useState("");

    function validarNombre(valor, nombre) {
        if (valor.trim().length == 0|| valor.trim().length >= 20|| valor.trim().length < 3) {
            setMensajeAlerta("El " +nombre+ " no puede estar vacío y debe estar entre 3 y 20 carácteres.");
            setTipoAlerta("danger");
            setMostrarAlerta(true);
            return false;
        }else{
            return true;
        }
    }

    function validarTexto(valor, nombre) {
        if (valor.trim().length == 0) {
            setMensajeAlerta("El " +nombre+ " no puede estar vacío.");
            setTipoAlerta("danger");
            setMostrarAlerta(true);
            return false;
        }else{
            return true;
        }
    }

    function validarNumero(valor, nombre) {
        if (valor < 0 || valor == 0 ) {
            setMensajeAlerta("El " + nombre + " no debe ser menor o igual a cero.");
            setTipoAlerta("danger");
            setMostrarAlerta(true);
            return false;
        }else{
            return true;
        }
    }

    function guardar() {
        if (validarNombre(txtNombre, "nombre") == false) {
            return;
        }else if (validarTexto(txtApellido, "apellido")== false){
            return;
        }else if (validarNumero(txtRut, "rut")== false){
            return;
        }else if (validarTexto(txtDv, "dv")== false){
            return;
        }else if (validarTexto(txtCorreo, "correo")== false){
            return;
        }else if (validarTexto(txtTelefono, "telefono")== false){
            return;
        }else if (validarTexto(txtDireccion, "direccion")== false){
            return;
        }
        else{
            console.log("Guardando");
            
        }
        
    }



    return(
        <>
        <App_alert mostrarAlert={mostrarAlerta} cerrarAlert={() => setMostrarAlerta(false)} variant={tipoAlerta} msgAlert={mensajeAlerta}></App_alert>
        <h1>Formulario</h1>

        <div className="col-6">
            <label htmlFor="txtNombre">Nombre: </label>
            <input onChange={(e) => setTxtNombre(e.target.value)}  className = "form-control" id = "txtNombre" type="text" />
        </div>

        <div className="col-6">
            <label htmlFor="txtApellido">Apellido: </label>
            <input onChange={(e) => setTxtApellido(e.target.value)}  className = "form-control" id = "txtApellido" type="text" />
        </div>

        <div className="col-6">
            <label htmlFor="txtRut">Rut: </label>
            <input onChange={(e) => setTxtRut(e.target.value)}  className = "form-control" id = "txtRut" type="text" />
        </div>

        <div className="col-6">
            <label htmlFor="txtDv">DV: </label>
            <input onChange={(e) => setTxtDv(e.target.value)}  className = "form-control" id = "txtDv" type="text" />
        </div>

        <div className="col-6">
            <label htmlFor="txtFechaNac">Fecha de Nacimiento: </label>
            <input onChange={(e) => setTxtFechaNac(e.target.value)}  className = "form-control" id = "txtFechaNac" type="date" />
        </div>

        <div className="col-6">
            <label htmlFor="txtCorreo">Correo: </label>
            <input onChange={(e) => setTxtCorreo(e.target.value)}  className = "form-control" id = "txtCorreo" type="text" />
        </div>

        <div className="col-6">
            <label htmlFor="txtTelefono">Telefono: </label>
            <input onChange={(e) => setTxtTelefono(e.target.value)}  className = "form-control" id = "txtTelefono" type="text" />
        </div>

        <div className="col-6">
            <label htmlFor="txtDireccion">Direccion: </label>
            <input onChange={(e) => setTxtDireccion(e.target.value)}  className = "form-control" id = "txtDireccion" type="text" />
        </div>

        <div className="col-3 mt-3">
            <Button onClick={guardar} className='btnGuardar' variant="outline-warning">Guardar</Button>
        </div>

    
        </>
    );
    
}

export default Formulario;



