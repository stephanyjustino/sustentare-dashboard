import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Navbar from "../../components/RefactoredSideMenu/SideMenu";

const DashboardColaboradores = () => {
    const [inputValue, setInputValue] = useState('');

    return (
        <div>
            <Navbar iconHome={"house"} iconEmployees={"users"} exit={"arrow-right-from-bracket"}/>
        </div>
    );

}

export default DashboardColaboradores;
