import { useContext, useState } from 'react';
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../../firebase';
import './login.scss';
import { useNavigate, Navigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';

const Login = () => {
    const [error, setError] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const { dispatch } = useContext(AuthContext);

    const handleLogin = (e) => {
        e.preventDefault();

        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            dispatch({type: "LOGIN", payload: user})
            navigate("/")
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.Message;
            setError(true);
        })
    }

    return (
        <div className="login">
            <form onSubmit={handleLogin}>
                <input 
                    type="email" 
                    placeholder='email' 
                    onChange={(e)=> setEmail(e.target.value)} 
                />
                <input 
                    type="password" 
                    placeholder='password' 
                    onChange={(e) => setPassword(e.target.value)} 
                />
                <button>Submit</button>
               { error && <span>Wrong password</span>}
            </form>
        </div>
    )
}

export default Login;