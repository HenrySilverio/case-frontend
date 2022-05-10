import './style.css'
import { Link } from 'react-router-dom'
import {useState, useContext} from 'react'
import Input from '../../form/Inpunt'
import {Context} from '../../../context/UserContext'

function Login() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const {login} = useContext(Context)

    function handleSumit(e) {
        e.preventDefault()
        login({email, password})

    }
    

    return(
        <section className="form_container">
            <h1>Login</h1>
            <form onSubmit={handleSumit}>
                <Input 
                  text="E-mail"
                  type="email"
                  name="email"
                  placeholder="Digite o seu e-mail"
                  handleOnChange={(e) => setEmail(e.target.value)}
                />
                <Input
                    text="Senha"
                    type="password"
                    name="password"
                    placeholder="Digite a sua senha"
                    handleOnChange={(e) => setPassword(e.target.value)}
                />
              <input type="submit" value="Entrar" />
            </form>
            <p>
                <Link to="/register">Cadastre-se.</Link>
            </p>
        </section>
    )
}

export default Login