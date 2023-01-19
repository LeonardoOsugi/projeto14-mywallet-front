import styled from "styled-components";
import { Tudo } from "../constants/Tudo";
import Logo from "../components/Logo";
import { Inputs } from "../constants/StyledInputs";
import { ButtonSave } from "../constants/ButtonSave";
import { StyledLinkTo } from "../constants/StyledLinkTo";
import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function CadastroPage(){
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const navegate = useNavigate();

    function addCadastro(e){
        e.preventDefault();

        const url = `${process.env.REACT_APP_API_URL}cadastro`;

        const body = {
            name: name,
            email: email,
            password: password,
            confirmPassword: confirmPassword
        };

        axios.post(url, body).then(()=>{
            alert("Cadastro realizado");
            navegate("/");
        }).catch((err)=>{
            alert(err.response.data.message);
        });
    };

    return(
        <Tudo>
            <SegundaPage>
                <ConteinerLogoCadastro>
                    <Logo/>
                </ConteinerLogoCadastro>
                <form onSubmit={addCadastro}>
                    <Inputs>
                        <input name="name" value={name} type="text" placeholder="Nome" onChange={(e) => setName(e.target.value)}/>"
                        <input name="email" value={email} type="text" placeholder="E-mail" onChange={(e) => setEmail(e.target.value)}/>
                        <input name="password" value={password} type="password" placeholder="Senha" onChange={(e) => setPassword(e.target.value)}/>
                        <input name="confirmPassword" value={confirmPassword} tupe="password" placeholder="Confirme a senha" onChange={(e) => setConfirmPassword(e.target.value)}/>
                    </Inputs>
                    <ButtonSave>
                        <button type="submit">Cadastrar</button>
                    </ButtonSave>
                    <Link to="/">
                        <StyledLinkTo>
                            <p>
                                Já tem uma conta? Entre agora!
                            </p>
                        </StyledLinkTo>
                    </Link>
                </form>
            </SegundaPage>
        </Tudo>
    )
};

const SegundaPage = styled.div`
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
`;

const ConteinerLogoCadastro = styled.div`
            margin-top: 10%;
            margin-bottom: 20px;
`;