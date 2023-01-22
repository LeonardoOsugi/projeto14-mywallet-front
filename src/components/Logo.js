import styled from "styled-components";
import mywallet from "../assets/img/MyWallet.svg";


export default function Logo(){
    return(
        <ConteinerDaLogo>
            <img src={mywallet} alt="Logo"/>
        </ConteinerDaLogo>
    )
};

const ConteinerDaLogo = styled.div`
            img{
                color: black;
                display: flex;
                justify-content: center;
                align-items: center;
                width: 147px;
                height: 50px;
            }
`;