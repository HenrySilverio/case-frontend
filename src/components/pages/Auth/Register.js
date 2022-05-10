import Input from "../../form/Inpunt"
import { Link } from 'react-router-dom'
import '../../form/Form.css'
import { useContext, useState } from 'react'
import {Context} from '../../../context/UserContext'


function Register() {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const {register} = useContext(Context)

    function handleSubmit(e) {
        e.preventDefault()
        register({name, email, password, confirmPassword})
    }
    return (
        <section className="form_container">
            <h1>Registrar</h1>
            <form onSubmit={handleSubmit}>
                <Input
                    text="Nome"
                    type="text"
                    name="name"
                    placeholder="Digite o seu nome"
                    handleOnChange={(e) => setName(e.target.value)}
                />
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
                <Input
                    text="Confirmação de senha"
                    type="password"
                    name="confirmpassword"
                    placeholder="Confirme a sua senha"
                    handleOnChange={(e) => setConfirmPassword(e.target.value)}
                />
                <input type="submit" value="Cadastrar" />
            </form>
            <p>
                Já tem conta? <Link to="/login">Clique aqui.</Link>
            </p>
        </section>
    )
}

export default Register