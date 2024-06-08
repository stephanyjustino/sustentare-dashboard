// Recursos
import styles from "./Principal.module.css"
import carregarKPIs from "../../utils/carregarKPIs.js"
import mudarTema from "../../utils/mudarTema.js"

// Componentes
import KPI from "../../components/KPI/KPI.jsx"
import Menu from "../../components/SideMenu/SideMenu.jsx"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useEffect, useState } from "react"

export default function Principal(){
    // Função que renderiza as KPIs
    var [kpis, setKPIs] = useState();
    function renderizarKPIs(){
        var valoresKPIs = carregarKPIs()
        var listaKPIs = valoresKPIs.map((valor) => (
            <KPI key={valor.nome} {...valor} />
        ))
        setKPIs(listaKPIs)
    }

    // Função que atualiza os dados das KPIs e demonstra isso visualmente
    var [loading, setLoading] = useState();
    function atualizarDados(){
        setLoading(<><FontAwesomeIcon icon={"spinner"} className={styles.animarCarregamento}/><p>Buscando dados...</p></>)
            renderizarKPIs()

            setTimeout(() => {
                setLoading(<><FontAwesomeIcon icon={"clock-rotate-left"}/><p>Atualizado agora</p></>)
            }, 3000)
            setTimeout(() => {
                setLoading(<><FontAwesomeIcon icon={"clock-rotate-left"}/><p>Atualizado há 30 segundos</p></>)
            }, 27000)
    }
    
    // Datas predefinidas para o período
    var dataAtual = new Date().toISOString().substring(0, 10)
    var inicioMes = new Date()
    inicioMes.setDate(1)
    inicioMes = inicioMes.toISOString().substring(0, 10)

    // Executa a atualização dos dados inicial depois do carregamento da página
    useEffect(() => {
        atualizarDados()
    }, [])
    // Define o intervalo para atualização dos dados
    useState(() => {
        atualizarDados()
        const intervalo = setInterval(() => {
            atualizarDados()
        }, 60000);
        return () => clearInterval(intervalo)
    }, [loading])

    return (
        <>
            <Menu paginaAtual="principal" />
            <div className="pagina">
                <header>
                    <div>
                        <h2>Painel analítico de estoque</h2>
                        <div>
                            <button className={styles.iconButton}>
                                <FontAwesomeIcon icon={"moon"} onClick={mudarTema}/>
                            </button>
                        </div>
                    </div>
                    <div>
                        <div className={styles.divPeriodo}>
                            <h4>Período de</h4>
                            <input type="date" defaultValue={inicioMes} required/>
                            <p>à</p>
                            <input type="date" defaultValue={dataAtual}/>
                        </div>
                        <div className={styles.divAtualizacao}>{loading}</div>
                    </div>
                </header>
                <section className={styles.KPIs}>{kpis}</section>
                <section className={styles.graficos}>
                    <div>
                        <div className={styles.divGrafico}></div>
                        <div className={styles.divGrafico}></div>
                    </div>
                    <div className={styles.divGrafico}></div>
                </section>
            </div>
        </>
    )
}