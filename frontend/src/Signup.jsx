import { useState } from 'react';
import axios from "axios";
import {Link} from "react-router-dom";

export default function Signup(){
    const [username, setUser] = useState("");
    const [password, setPass] = useState("");
    const [msg, setMsg] = useState("");
    const [enlace, setEnlace] = useState("¿Ya tienes cuenta? Inicia sesión");

    const handleSignup = async (e) => {
        e.preventDefault();
        try {
            await axios.post("http://127.0.0.1:8000/auth/register", {username, password});
            setMsg("Usuario creado exitosamente!");
            setEnlace("Iniciar sesión");

        } catch {
        setMsg("Error en el registro");}
    }

    return (
        <div className="p-6 max-w-sm mx-auto bg-white shadow rounded-lg">
            <h1 className="text-xl font-bold mb-3">Registrarse</h1>
            <form onSubmit={handleSignup}>
                <input className="boder p-2 2-full md-2" placeholder="Usuario" value={username} onChange={(e) => setUser(e.target.value)}/>
                <input className="border p-2 w-full mb-2" type="password" placeholder="Contraseña" value={password} onChange={(e) => setPass(e.target.value)} />
                <button className="bg-blue-500 text-white px-4 py-2 rounded">Registrar</button>
            </form>
            <p className="mt-2">{msg}</p>
            <Link to="/Login" className="text-blue-500 underline">{enlace}</Link>
        </div>
    )}