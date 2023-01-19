import { BrowserRouter, Route, Routes  } from "react-router-dom";
import GlobalStyle from "./assets/styles/GlobalStyle";
import LoginPage from "./pages/LoginPage";
import CadastroPage from "./pages/CadastroPage";
import FulanoPage from "./pages/FulanoPage";

function App(){
    return(
        <BrowserRouter>
            <GlobalStyle/>
            <Routes>
                <Route path="/" element={<LoginPage/>}/>
                <Route path="/cadastro" element={<CadastroPage/>}/>
                <Route path="/fulano" element={<FulanoPage/>}/>
            </Routes>
        </BrowserRouter>
    );
};

export default App;