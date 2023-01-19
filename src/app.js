import { BrowserRouter, Route, Routes  } from "react-router-dom";
import GlobalStyle from "./assets/styles/GlobalStyle";
import LoginPage from "./pages/LoginPage.js";
import CadastroPage from "./pages/CadastroPage.js";
import FulanoPage from "./pages/FulanoPage.js";
import NewEnterPage from "./pages/NewEnterPage.js";
import NewExitPage from "./pages/NewExitPage.js";

function App(){
    //Ainda falta penssar como compartilhar alguns useStates
    return(
        <BrowserRouter>
            <GlobalStyle/>
            <Routes>
                <Route path="/" element={<LoginPage/>}/>
                <Route path="/cadastro" element={<CadastroPage/>}/>
                <Route path="/fulano" element={<FulanoPage/>}/>
                <Route path="/newenter" element={<NewEnterPage/>}/>
                <Route path="/newexit" element={<NewExitPage/>}/>
            </Routes>
        </BrowserRouter>
    );
};

export default App;