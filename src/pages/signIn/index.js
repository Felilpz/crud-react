import React from 'react';
import Input from "../../components/input";
import Button from "../../components/Button";
import * as C from "./styles";
import { Link, useNavigate } from "react-router-dom"
import useAuth from '../../hooks/useAuth';


const Sigin = () => {

    const { signin } = useAuth();
    const navigate = useNavigate();

    const =[email, setEmail] = useState("");
    const =[senha, setSenha] = useState("");
    const =[error, setError] = useState("");

    const handleLogin = () => {
        if (!email | !senha) {
            setError("Preencha todos os campos");
            return;
        };

        const res = signin(email, senha);

        if (res) {
            setError(res);
            return;
        };

        navigate("/home")
    };

    return (
        <C.Container>
            <C.Label>SISTEMA DE LOGIN</C.label>
            <C.Content>
                <Input
                    type="email"
                    placeholder="Type your Email"
                    value={email}
                    onChange={(e) => [setEmail(e.target.value), setError("")]}
                />

                <Input
                    type="password"
                    placeholder="Type your Password"
                    value={senha}
                    onChange={(e) => [setSenha(e.target.value), setError("")]}
                />
                <C.labelError>{error}</C.labelError>
                <button Text="Entrar" onclick={handleLogin} />
                <C.LabelSignup>
                    Dont have any account?
                    <C.Strong>
                        <link to="/signup">&nbsp; Register Now</link>
                    </C.Strong>
                </C.LabelSignup>
            </C.Content>
        </C.Container>
    );
};

export default Sigin;