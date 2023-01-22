import styled from "styled-components";
import dayjs from "dayjs";
import { useEffect } from "react";

//status, valor, descricao, setSaldoInit, saldoInit
export default function EntradasSaidas(props){
    const {status, valor, descricao} = props;
    const date = dayjs().locale("pt").format("DD/MM");

    
    return(
        <LadoALadoDeCaboARabo>
            <Data>
                <p>
                    {date}
                </p>
            </Data>
            <p>
                {descricao}
            </p>
            <Altera>
                <p>
                    {valor}
                </p>
            </Altera>
        </LadoALadoDeCaboARabo>
    )
};

const LadoALadoDeCaboARabo = styled.div`
            display: flex;
            flex-direction: row;
            justify-content: space-around;
            p{
                width: 100%;
                font-family: 'Raleway';
                font-size: 16px;
            }
`;

const Altera = styled.div`
            p{
                color: ${props => props.entsai};
            }
`;

const Data = styled.div`
            p{
                color: "#C6C6C6";
            }
`;