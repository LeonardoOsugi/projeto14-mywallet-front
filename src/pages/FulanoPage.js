import styled from "styled-components";
import { Tudo } from "../constants/Tudo.js";
import VoltaLogin from "../assets/img/VoltaLogin.svg";
import mine from "../assets/img/mine.svg";
import plus from "../assets/img/plus.svg";
import axios from "axios";
import EntradasSaidas from "../components/EntradasSaidas.js";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function FulanoPage(){
    const[listaMoney, setListaMoney] = useState("");
    const[saldoInit, setSaldoInit] = useState(2849.96);

    const nome = JSON.parse(localStorage.getItem('name'));
    const token = JSON.parse(localStorage.getItem('token'));
    
    useEffect(() => {
        axios.get(`${process.env.REACT_APP_API_URL}menu`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        }).then((res) => {
            setListaMoney(res.data);
        }).catch((err) => {
            alert(err.response.data);
        });
    },[]);

    return(
        <Tudo>
            <TerceiraPage>
                <Corpo>
                    <Titulo>
                        <h1>
                            Olá, {nome}
                        </h1>
                        <link to="/">
                            <img src={VoltaLogin} alt="Volta Login"/>
                        </link>
                    </Titulo>
                    <Lista>
                        {listaMoney.length === 0?(<div className="listavazia">Não há registros de<br/> entrada ou saída</div>)
                        :
                        (<ListaEntradaSaida>
                            {listaMoney.map((i) => <EntradasSaidas key={i.id} status={i.status} valor={i.valor} descricao={i.descricao} setSaldoInit={setSaldoInit} saldoInit={saldoInit}/>)}
                            <Saldo>
                                <p>
                                    <strong>
                                        Saldo
                                    </strong>
                                </p>
                                <p className="saldoAtual">
                                    {saldoInit}
                                </p>
                            </Saldo>
                        </ListaEntradaSaida>)}
                    </Lista>
                    <CaixaSomaSubtrai>
                        <Link to="/newenter">
                            <Entrada>
                                <img src={plus} alt="plus"/>
                                <p>
                                    Nova<br/>Entrada
                                </p>
                            </Entrada>
                        </Link>
                        <Link to="">
                            <Saida>
                                <img src={mine} alt="mine" />
                                <p>
                                    Nova<br/>Saída
                                </p>
                            </Saida>
                        </Link>
                    </CaixaSomaSubtrai>
                </Corpo>
            </TerceiraPage>
        </Tudo>
    );

};
const TerceiraPage = styled.div`
            padding: 30px;
            display: flex;
            justify-content: center;
`;

const Corpo = styled.div`
            display: flex;
            flex-direction: column;
            width: 326px;
`;

const Lista = styled.div`
            width: 326px;
            height: 426px;
            background-color: #ffffff;
            border-radius: 10px;
            margin-bottom: 10px;
            .listavazia{
                justify-content: center;
                align-items: center;
                font-family: 'Raleway';
                font-size: 20px;
            }
`;

const Titulo = styled.div`
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            margin-bottom: 20px;
            h1{
                font-family: 'Raleway';
                font-size: 26px;
                color: #ffffff;
            }
`;

const CaixaSomaSubtrai = styled.div`
            display: flex;
            flex-direction: row;
            justify-content: space-between;
`;

const Entrada = styled.div`
            padding: 10px;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            width: 155px;
            height: 144px;
            background-color: #A328D6;
            border-radius: 10px;
            
            img{
                width: 25px;
                height: 25px;
            };

            p{
                font-family: 'Raleway';
                font-size: 17px;
                color: #ffffff;
            };
`;

const Saida = styled.div`
            padding: 10px;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            width: 155px;
            height: 144px;
            background-color: #A328D6;
            border-radius: 10px;

            img{
                width: 25px;
                height: 25px;
            };

            p{
                font-family: 'Raleway';
                font-size: 17px;
                color: #ffffff;
            }
`;


const ListaEntradaSaida = styled.div`
        flex-wrap: wrap;
`;

const Saldo = styled.div`
        flex-direction: row;
        justify-content: space-around;
        p{
            font-family: "Raleway";
            font-size: 17px;
        }
        .saldoatual{
            color: "#03AC00";
        }
`;