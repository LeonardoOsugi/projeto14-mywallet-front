import styled from "styled-components";
import { Tudo } from "../constants/Tudo";
import { Inputs } from "../constants/StyledInputs";
import { ButtonSave } from "../constants/ButtonSave";
import axios from  "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function NewEnterPage(){
    const [valor, setValor] = useState("");
    const [descricao, setDescricao] = useState("");
    
    const token = JSON.parse(localStorage.getItem('token'));

    const navegate = useNavigate();

    function addInfo(e){
        e.preventDefault();

        const url = `${process.env.REACT_APP_API_URL}entrada`;

        const body = {
            valor: valor,
            descricao: descricao
        };

        axios.post(url, body,{
            headers: {
                'Authorization': `Bearer ${token}`
            }
        }).then(() => {
            alert("entrada insirida");
            navegate("/fulano");
        }).catch((err) =>{
            alert(err.response.data.message);
        });
    };

    return(
        <Tudo>
            <QuartaPagina>
                <Corpo>
                    <CaixaTitulo>
                        <h1>
                            Nova Entrada
                        </h1>
                    </CaixaTitulo>
                    <form onSubmit={addInfo}>
                        <Inputs>
                            <input name="valor" value={valor} type="text" placeholder="Valor" onChange={(e) => setValor(e.target.value)}/>
                            <input name="descricao" value={descricao} type="text" placeholder="Descrição" onChange={(e) => setDescricao(e.target.value)}/>
                        </Inputs>
                        <ButtonSave>
                            <button type="submit">Salvar Entrada</button>
                        </ButtonSave>
                    </form>
                </Corpo>
            </QuartaPagina>
        </Tudo>
    );
};

const QuartaPagina = styled.div`
            padding: 30px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
`;

const Corpo = styled.div`
            width: 326px;
`;

const CaixaTitulo = styled.div`
            flex-direction: row;
            justify-content: flex-start;
            align-items: center;
            margin-bottom: 50px;

            h1{
                font-family: 'Raleway';
                font-size: 26px;
                color: #ffffff;
            }
`;