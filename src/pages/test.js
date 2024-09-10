import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Navbar from "../components/RefactoredSideMenu/SideMenu";
import Log from "../components/ExpandedOperationLog/ExpandedOperationLog"
import Kpi from "../components/KPI/Kpi";

const ItemDoMenu = () => {
    const [inputValue, setInputValue] = useState('');

    return (
        <div>
            <Kpi/>
        </div>
    );

}

export default ItemDoMenu;

// <Navbar iconHome={"house"} iconEmployees={"users"} exit={"arrow-right-from-bracket"}/>