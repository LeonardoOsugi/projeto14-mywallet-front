import styled from "styled-components";
import dayjs from "dayjs";

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
            <Altera entsai={status === "entrada"?"#03AC00":"#C70000"}>
                <p>
                    {Number(valor).toFixed(2)}
                </p>
            </Altera>
        </LadoALadoDeCaboARabo>
    )
};

const LadoALadoDeCaboARabo = styled.div`
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            margin-top: 20px;
            margin-left: 10px;
            margin-right: 10px;
            p{
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
                color: gray;
`;