import { Link } from 'react-router-dom'
import './login.css'
const Login = () => {
    return (
        <div className="login">
            <form className="loginForm">
                <label htmlFor="">Email</label>
                <input type="text" placeholder="Enter you email..."/>
                <label htmlFor="">Password</label>
                <input type="password" placeholder="Enter you password..."/>
                <button className="loginButton">Login</button>
            </form>
            <button className="loginRegisterButton">
                <Link className="link" to="/register">
                Register
                </Link>
            </button>
        </div>
    )
}

export default Login
