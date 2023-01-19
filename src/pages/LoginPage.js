import styled from "styled-components";
import { Tudo } from "../constants/Tudo.js";
import Logo from "../components/Logo.js";
import { Inputs } from "../constants/StyledInputs.js";
import { ButtonSave } from "../constants/ButtonSave.js";
import { Link, useNavigate } from "react-router-dom";
import { StyledLinkTo } from "../constants/StyledLinkTo.js";
import { useState } from "react";
import axios from "axios";

export default function LoginPage(){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navegate = useNavigate;

    function addInfo(e){
        e.preventDefault();

        const url = `${process.env.REACT_APP_API_URL}login`;

        const body = {
            email: email,
            passaword: password
        };

        axios.post(url, body).then((res) =>{
            localStorage.setItem("token", JSON.stringify(res.data.token));
            localStorage.setItem("name", JSON.stringify(res.data.nome));

            navegate("/fulano");
        }).catch((err) => {
            alert(err.response.data.message);
        });
    }
    return(
        <Tudo>
            <PrimeiraPage>
                <ImgLogo>
                    <Logo/>
                </ImgLogo>
                <form onSubmit={addInfo}>
                    <Inputs>
                        <input name="email" value={email} type="email" placeholder="E-mail" onChange={(e) => setEmail(e.target.value)}/>
                        <input name="password" value={password} type="password" placeholder="Senha" onChange={(e) => setPassword(e.target.value)}/>
                    </Inputs>
                    <ButtonSave>
                        <button type="submit">Entrar</button>
                    </ButtonSave>
                </form>
                <Link to="/cadastro">
                    <StyledLinkTo>
                        <p>
                            Primeira vez? Cadastre-se!
                        </p>
                    </StyledLinkTo>
                </Link>
            </PrimeiraPage>
        </Tudo>
    )
};

const PrimeiraPage = styled.div`
            display: flex;
            flex-direction: column;
            flex-wrap: wrap;
            justify-content: center;
            align-items: center;
`;

const ImgLogo = styled.div`
            margin-top: 15%;
            margin-bottom: 20px;
`;