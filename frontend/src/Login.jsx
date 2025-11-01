import { useState } from 'react';
import axios from "axios";
import {Link} from "react-router-dom";
import logo from "./images/scbr.svg";
import men from "./images/login_face_m.svg";
import women from "./images/login_face_w.svg";

export default function Login(){
    const [username, setUser] = useState("");
    const [password, setPass] = useState("");
    const [msg, setMsg] = useState("");
    const [faceSrc, setFaceSrc] = useState(men);

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("http://127.0.0.1:8000/auth/login", { username, password });
            setMsg("Login exitoso! Token: " + response.data.access_token);
        } catch {
            setMsg("Error en el login");
        }
    };
    const handleImage = () => {
        setFaceSrc(prev => (prev === men ? women : men));
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="p-8 max-w-sm w-full bg-white shadow-lg rounded-lg">
                <div className="flex flex-col mb-4 items-center ">
                    <img src={logo} alt="Logo" className="w-90 -m-10" />
                    <img src={faceSrc}
                         alt="Avatar"
                         className="w-60 -m-5 transition-transform duration-200 cursor-pointer"
                            onMouseEnter={handleImage}
                    />
                </div>
                <form onSubmit={handleLogin}>
                    <input className="border-3 border-[#0b3663] rounded-lg p-2 w-full my-3 mb-2" placeholder="Usuario" value={username} onChange={(e) => setUser(e.target.value)}/>
                    <input className="border-3 border-[#0b3663] rounded-lg p-2 w-full my-3 mb-2" type="password" placeholder="Contraseña" value={password} onChange={(e) => setPass(e.target.value)} />
                    <button className=" bg-[#04305e] border-[#04305e] text-white px-4 py-2 my-3 rounded mx-auto block hover:bg-white  hover:text-[#04305e] hover:border-2">Iniciar sesión</button>
                </form>
                <p className="mt-2 text-[#004588]">{msg}</p>
                <p className="text-[#004588]">¿Aun no tienes cuenta?</p> <Link to="/Signup" className="text-blue-500 underline">Registrarse</Link>
            </div>
        </div>
    )
}