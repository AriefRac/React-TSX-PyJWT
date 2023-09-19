import React, {SyntheticEvent, useState} from 'react'
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const redirect = useNavigate();


    const submit = async (e: SyntheticEvent) => {
        e.preventDefault();

        fetch('http://localhost:8000/api/login/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify({
            email,
            password
        })
    })
    .then(response => response.json()) // Menggunakan .then() untuk menangani respons
    .then(data => {
        console.log(data);

        const token = data.jwt;
        localStorage.setItem('jwt', token);
        Cookies.set('jwt',token)

        const cookieValue = data.jwt;
        console.log('Cookie:', cookieValue);
        redirect('/')
    })
    .catch(error => {
        console.error('Error:', error);
    });
        
    }


    return (
        <form>
            <h1 className="h3 mb-3 fw-normal">Sign In</h1>
            <input type="email" className="form-control"  placeholder="Email Address" required 
                onChange={e => setEmail(e.target.value)}
            />

            <input type="password" className="form-control" placeholder="Password" required 
                onChange={e => setPassword(e.target.value)}
            />

            <button className="btn btn-primary w-100 py-2" type="submit" onClick={submit}>Sign in</button>
        </form>
    );
};

export default Login;