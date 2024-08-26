import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login/Login";
import DashboardGeral from "./pages/DashboardGeral/DashboardGeral";
import DashboardColaboradores from "./pages/DashboardColaboradores/DashboardColaboradores";

function Rotas() {

    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Login />} />
                    <Route path={"/login"} element={<Login />} />
                    <Route path={"/dashboard-geral"} element={<DashboardGeral />} />
                    <Route path={"/dashboard-colaboradores"} element={<DashboardColaboradores />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}
export default Rotas;
