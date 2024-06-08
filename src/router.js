import { BrowserRouter, Routes, Route } from "react-router-dom";

import Principal from "./pages/Principal/Principal";

export default function Router(){
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Principal/>}/>
            </Routes>
        </BrowserRouter>
    )
}