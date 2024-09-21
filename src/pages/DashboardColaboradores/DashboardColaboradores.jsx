import React, {useEffect, useState} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Navbar from "../../components/RefactoredSideMenu/SideMenu";
import Button from "../../components/Button/Button"
import styles from './dashboardColaboradores.module.css';
import ChartBar from "../../components/Chart/ChartBar"
import Kpi from "../../components/KPI/Kpi";
import ExpandedOperationLog from "../../components/ExpandedOperationLog/ExpandedOperationLog"
import CheckableList from "../../components/CheckableList/CheckableList";

const DashboardColaboradores = () => {
    const labels = ['Sofia', 'Flávio', 'Carlos', 'Luiza', 'Marcos', 'Rafael', 'Manuel', 'Diego', 'Clara'];

    const datasets = [
        {
            label: 'Entradas',
            data: [12, 5, 8, 12, 30, 25, 40, 8, 5],
            backgroundColor: 'rgba(54, 162, 235, 0.6)', // Cor das barras
            borderColor: 'rgba(54, 162, 235, 1)', // Cor da borda das barras
            borderWidth: 1,
        },
    ];

     /* Realiza animação do ícone e atualiza o texto do hoŕario da última atualização. */
    const [lastUpdateText, setUpdateText] = useState("")
    const [loadingClass, setLoadingClass] = useState(null)
    function atualizarDados(){
        setUpdateText("atualizando...")
        setLoadingClass(styles.loading)

        setTimeout(()=>{
            let agora =  new Date()
            let horarioFormat = `${agora.getHours()}:${agora.getMinutes()}`

            setUpdateText(`atualizado pela última vez às ${horarioFormat}`)
            setLoadingClass(null)
        }, 1500)
    }
    useEffect(() => atualizarDados, []); /*Executar 1 vez, no carregamento*/
    setInterval(atualizarDados, 30000) /*Executar à cada 30 seg*/

    return (
        <div className={styles.group}>
            <Navbar iconHome={"house"} iconEmployees={"users"} exit={"arrow-right-from-bracket"} />
            <div className={styles.Global}>
                <div className={styles.NavTop}>
                    <span className={styles.titulo}>Painel dos colaboradores</span>
                    <div className={styles.buttons}>
                        <CheckableList textoBase={"Nome"} opcoes={labels}/>
                        <Button insideText={"Período"} icon={"chevron-down"} />
                    </div>
                </div>
                <div className={styles.Chart}>
                    <div className={styles.list}>
                        <ExpandedOperationLog
                            imageAddress={"https://images.pexels.com/photos/2071873/pexels-photo-2071873.jpeg?auto=compress&cs=tinysrgb&w=600"}
                            descImage={"Imagem do usuário"}
                            name={"Carol"}
                            iconInput={"circle-info"}
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
                        height="42%"
                        backgroundColor="#f0f0f0"
                        margin="auto"
                        alignItems="center"
                    />
                </div>
            </div>
            <div className={styles.SideMenu}>
                <div onClick={() => atualizarDados()} className={styles.updateInfo + " " + loadingClass}>
                    <p>Dados em tempo real.</p>
                    <span>
                        <FontAwesomeIcon icon={"clock-rotate-left"} className={styles.staticIcon}/>
                        <FontAwesomeIcon icon={"rotate"} className={styles.loadingIcon}/>
                        <p>{lastUpdateText}</p>
                    </span>
                </div>
                <div className={styles.DivKpis}>
                    <Kpi status="bom" name="Colaborador com mais entradas" value="Manuel"/>
                    <Kpi name="Total de entradas" value="145"/>
                    <Kpi status="ruim" name="Total de Saídas" value="129"/>
                    <Kpi status="bom" name="Colaborador com mais entradas" value="Manuel"/>


                </div>
            </div>
        </div>
    );

}

export default DashboardColaboradores;
