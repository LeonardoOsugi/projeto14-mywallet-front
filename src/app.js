import { BrowserRouter, Route, Routes  } from "react-router-dom";
import GlobalStyle from "./assets/styles/GlobalStyle";

function App(){
    return(
        <BrowserRouter>
            <GlobalStyle/>
            <Routes>
                <Route path="/" element={<LoginPage/>}/>
            </Routes>
        </BrowserRouter>
    );
};

export default App;