import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Navbar from "../../components/RefactoredSideMenu/SideMenu";
import Button from "../../components/Button/Button"
import styles from './dashboardColaboradores.module.css';
import ChartBar from "../../components/Chart/ChartBar"
import Kpi from "../../components/KPI/Kpi";
import ExpandedOperationLog from "../../components/ExpandedOperationLog/ExpandedOperationLog"

const DashboardColaboradores = () => {
    const labels = ['Sofia', 'Flávio', 'Carlos', 'Luiza', 'Marcos', 'Rafael', 'Manuel', 'Diego', 'Clara'];

    const datasets = [
        {
            label: 'Saídas',
            data: [12, 5, 8, 12, 30, 25, 40, 8, 5],
            backgroundColor: 'rgba(54, 162, 235, 0.6)', // Cor das barras
            borderColor: 'rgba(54, 162, 235, 1)', // Cor da borda das barras
            borderWidth: 1,
        },
    ];

    const [inputValue, setInputValue] = useState('');

    return (
        <div className={styles.group}>
            <Navbar iconHome={"house"} iconEmployees={"users"} exit={"arrow-right-from-bracket"} />
            <div className={styles.Global}>
                <div className={styles.NavTop}>
                    <span className={styles.titulo}>Painel dos colaboradores</span>
                    <div className={styles.buttons}>
                        <Button insideText={"Nome"} icon={"chevron-down"} />
                        <Button insideText={"Função"} icon={"chevron-down"} />
                        <Button insideText={"Período"} icon={"chevron-down"} />
                    </div>
                </div>
                <div className={styles.Chart}>
                    <div className={styles.list}>
                        <ExpandedOperationLog
                            imageAddress={"https://images.pexels.com/photos/2071873/pexels-photo-2071873.jpeg?auto=compress&cs=tinysrgb&w=600"}
                            descImage={"Imagem do usuário"} 
                            name={"Carol"} 
                            iconInput={"clock-rotate-left"} 
                            valueInput={"Entrada: 25 Kg de carne"} 
                            iconTime={"clock-rotate-left"} 
                            valueTime={"Um mês atrás"}
                        />
                    </div>
                    <ChartBar
                        labels={labels}
                        datasets={datasets}
                        title="Entrada"
                        width="98%"
                        height="340px"
                        backgroundColor="#f0f0f0"
                        margin="auto"
                        alignItems="center"
                    />
                </div>
            </div>
            <div className={styles.SideMenu}>
                <div className={styles.icons}>
                    <FontAwesomeIcon icon="moon" />
                    <FontAwesomeIcon icon="fa-solid fa-gear" />
                    <FontAwesomeIcon icon="fa-solid fa-bell" />
                </div>
                <div className={styles.DivKpis}>
                    <Kpi status="bom" />
                    <Kpi />
                    <Kpi status="ruim" />
                    <Kpi status="bom" />

                </div>
            </div>
        </div>
    );

}

export default DashboardColaboradores;
