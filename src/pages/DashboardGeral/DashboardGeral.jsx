import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Navbar from "../../components/RefactoredSideMenu/SideMenu";
import Button from "../../components/Button/Button"
import styles from './dashboardGeral.module.css';
import ChartBar from "../../components/Chart/ChartBar"
import Kpi from "../../components/KPI/Kpi";

const Dashboard = () => {
    const labels = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];

    const datasets = [
        {
            label: 'Entrada',
            data: [3000, 2000, 1500, 2500, 3500, 3000, 4000, 1000, 2000, 4500, 3500, 3000],
            backgroundColor: 'rgba(54, 162, 235, 0.6)',
            borderColor: 'rgba(54, 162, 235, 1)',
            borderWidth: 1,
        },
        {
            label: 'Saída',
            data: [1000, 2500, 4500, 2000, 3000, 3500, 2000, 1500, 4000, 5000, 4000, 2000],
            backgroundColor: 'rgba(255, 99, 132, 0.6)',
            borderColor: 'rgba(255, 99, 132, 1)',
            borderWidth: 1,
        },
    ];
    const [inputValue, setInputValue] = useState('');

    return (
        <div className={styles.group}>
            <Navbar iconHome={"house"} iconEmployees={"users"} exit={"arrow-right-from-bracket"} />
            <div className={styles.Global}>
                <div className={styles.NavTop}>
                    <span className={styles.titulo}>Painel de controle geral</span>
                    <div className={styles.buttons}>
                        <Button insideText={"Categoria"} icon={"chevron-down"} />
                        <Button insideText={"Produto"} icon={"chevron-down"} />
                        <Button insideText={"Alterar período"} />
                    </div>
                </div>
                <div className={styles.Chart}>
                    <div className={styles.Charts}>
                        <ChartBar
                            labels={labels}
                            datasets={datasets}
                            title="Entrada e Saída"
                            width="49%"
                            height="90%"
                            backgroundColor="#f0f0f0"
                        />
                        <ChartBar
                            labels={labels}
                            datasets={datasets}
                            title="Entrada e Saída"
                            width="49%"
                            height="90%"
                            backgroundColor="#f0f0f0"
                        />
                    </div>
                    <ChartBar
                        labels={labels}
                        datasets={datasets}
                        title="Entrada e Saída"
                        width="98%"
                        height="320px"
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
                    <Kpi status="bom" name ="Produtos com baixo estoque" value ="348"/>
                    <Kpi name="Produtos próximos de vencer" value="KG" value="348"/>
                    <Kpi status="ruim" name="Produtos vencidos ou descartados" unit="R$" value="348,00"/>
                    <Kpi status="bom" name="Compras não planejadas." value="6" />
                    
                </div>
            </div>
        </div>
    );

}

export default Dashboard;
