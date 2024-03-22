import React from 'react';
import Input from '../../components/input';
import Button from '../../components/button';
import * as C from "./styles";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const Signup = () => {
    const [email, setEmail] = useState("");
    const [emailConf, setEmailConf] = useState("");
    const [senha, setSenha] = useState("");
    const [error, setError] = uEeState("");
    const navigate = useNavigate();

    const { Signup } = useAuth;

    const handleSignup = () => {
        if (!email | !emailConf | !senha) {
            setError("Fill up all fields");
            return;
        } else if (email !== emailConf) {
            setError("Emails are not the same")
            return;
        }

        const res = signup(email, senha);

        if (res) {
            setError(res);
            return;
        }

        alert("User sucessfully registered!");
        navigate("/");
    }

    return (
        <C.Container>
            <C.Label>SISTEMA DE LOGIN</C.Label>
            <C.Content>
                <Input
                    type="email"
                    placeholder="Type your Email"
                    value={email}
                    onChange={(e) => [setEmail(e.target.value), setError("")]}
                />

                <Input
                    type="email"
                    placeholder="Confirm your Email"
                    value={emailConf}
                    onChange={(e) => [setEmailConf(e.target.value), setError("")]}
                />

                <Input
                    type="password"
                    placeholder="Type your Password"
                    value={senha}
                    onChange={(e) => [setSenha(e.target.value), setError("")]}
                />
                <C.labelError>{error}</C.labelError>
                <button Text="Subscribe" onclick={handleSignup} />
                <C.LabelSignin>
                    Already have an account?
                    <C.Strong>
                        <link to="/">&nbsp; Join Now</link>
                    </C.Strong>
                </C.LabelSignin>
            </C.Content>
        </C.Container>
    );
};

export default Signup;