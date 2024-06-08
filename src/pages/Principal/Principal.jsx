// Recursos
import styles from "./Principal.module.css"
import carregarKPIs from "../../utils/carregarKPIs.js"

// Componentes
import KPI from "../../components/KPI/KPI.jsx"
import Menu from "../../components/SideMenu/SideMenu.jsx"


const valoresKPIs = carregarKPIs()

export default function Principal() {
    return (
        <>
        <Menu paginaAtual="principal"/>
        <div className="pagina">

            <header>

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