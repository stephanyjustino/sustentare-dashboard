// Recursos
import styles from "./Principal.module.css"
import carregarKPIs from "../../utils/carregarKPIs.js"
import mudarTema from "../../utils/mudarTema.js"

// Componentes
import KPI from "../../components/KPI/KPI.jsx"
import Menu from "../../components/SideMenu/SideMenu.jsx"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const valoresKPIs = carregarKPIs()
const dataAtual = new Date().toISOString().substring(0, 10)
var inicioMes = new Date()
inicioMes.setDate(1)
inicioMes = inicioMes.toISOString().substring(0, 10)


export default function Principal() {
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
                            <input type="date" id="inicioPeriodo" defaultValue={inicioMes} required/>
                            <p>à</p>
                            <input type="date" id="finalPeriodo" defaultValue={dataAtual}/>
                        </div>
                        <div className={styles.divAtualizacao}>
                            <FontAwesomeIcon icon={"clock-rotate-left"}/>
                            <p>Atualizado à ultima vez agora</p>
                        </div>
                    </div>
                </header>
                <section className={styles.KPIs}>
                    {valoresKPIs.map((valor) => (
                        <KPI key={valor.nome} {...valor} />
                    ))}
                </section>
            </div>
        </>
    )
}