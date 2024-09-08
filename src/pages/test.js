import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Navbar from "../components/RefactoredSideMenu/SideMenu";
import Log from "../components/ExpandedOperationLog/ExpandedOperationLog"
import Kpi from "../components/KPI/Kpi";

const ItemDoMenu = () => {
    const [inputValue, setInputValue] = useState('');

    return (
        <div>
            <Log imageAddress={"https://images.pexels.com/photos/2071873/pexels-photo-2071873.jpeg?auto=compress&cs=tinysrgb&w=600"} descImage={"Imagem do usuário"} name={"Carol"} iconInput={"circle-check"} valueInput={"Entrada: 25 Kg de carne"} iconTime={"clock-rotate-left"} valueTime={"Um mês atrás"} />
            <Kpi/>
        </div>
    );

}

export default ItemDoMenu;

// <Navbar iconHome={"house"} iconEmployees={"users"} exit={"arrow-right-from-bracket"}/>