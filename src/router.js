import { BrowserRouter, Routes, Route } from "react-router-dom";
import Menu from "./components/SideMenu/SideMenu";
import Teste from "./pages/test";
import Principal from "./pages/Principal/Principal";

export default function Router(){
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Principal/>}/>
                <Route path="/test" element={<Teste/>}/>
            </Routes>
        </BrowserRouter>
    )
}