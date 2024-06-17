import React, {useState} from 'react';
import Imagen from '../assets/fondo-login.jpg'
import ImageProfile from '../assets/positio-logo.png'
import appFirebase from '../credenciales'
import {getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword} from 'firebase/auth'
const auth = getAuth(appFirebase)

const Login = () => {

    const [registrando, setRegistrando] = useState(false);
    const functAutenticacion = async(e) =>{
        e.preventDefault();
        const correo = e.target.email.value;
        const contraseña = e.target.password.value;

        if(registrando) {
            try {
                await createUserWithEmailAndPassword(auth, correo, contraseña)
            } catch (error) {
                alert("Asegurese de que la contraseña tenga mas de 8 caracteres")
            }
        
        }else{
            try {
                await signInWithEmailAndPassword(auth, correo, contraseña)
            } catch (error) {
                alert("El correo o la contraseña no son correctos")
            }
            
        }
    }
    
    return (
    
        <div className='container'>
            <div className='row'>
                {/* Columna pequeña  */}  
                <div className='col-md-4'>
                    <p></p>
                </div>
                {/* Columna pequeña con formulario */}                    
                <div className="col-md-4">
                    <div className="padre">
                        <div className="card card-body shadow-lg">
                            <img src={ImageProfile} alt="" className='estilo-profile'/>
                            <form onSubmit={functAutenticacion}>
                                <input type="text" placeholder='Ingresar Email' className='cajatexto' id='email'/>
                                <input type="password" placeholder='Ingresar Contraseña' className='cajatexto' id='password'/>
                                <button className='btnform'>{registrando ? "Registrar" : "Iniciar Sesion"}</button>
                            </form>
                            <h4 className='texto'>{registrando ? "Si ya tienes cuenta" : "No tienes cuenta"}
                                <button className='btnswitch' onClick={()=>setRegistrando(!registrando)}>

                                    {registrando ? "Inicia sesion" : "Registrar"}
                                    
                                </button>
                            </h4>
                        </div>
                    </div>
                </div>
                 {/* Columna pequeña  */}  
                 <div className='col-md-4'>
                    <p></p>
                </div>
                {/* Columna mas grande          
                <div className='col-md-8'>
                    <img src={Imagen} alt="" className='tamaño-imagen' />
                </div>
                */} 
            </div>
        </div>
        
        
    )

}

export default Login