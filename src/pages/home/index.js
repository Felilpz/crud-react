import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import useAuth from "../../hooks/useAuth";
import * as C from "./styles";

const Home = () => {
    const { signout } = useAuth();
    const navigate = useNavigate();

    return (
        <C.Container>
            <C.title>Home</C.title>
            <Button Text="Sair" onClick={() => [signout(), navigate("/")]}>
                Go Out
            </Button>
        </C.Container >
    );
};

export default Home;