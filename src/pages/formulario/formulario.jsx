import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';


function Formulario() {



    return(
        <>
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
            <Button className='btnGuardar' variant="primary">Guardar</Button>
        </div>

    
        </>
    );
    
}

export default Formulario;



