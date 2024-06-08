// Recursos
import styles from "./Principal.module.css"
import carregarKPIs from "../../utils/carregarKPIs.js"

// Componentes
import KPI from "../../components/KPI/KPI.jsx"


const valoresKPIs = carregarKPIs()

export default function Principal() {
    return (<>
        <section className={styles.KPIs}>
            {valoresKPIs.map((valor) => (
                <KPI key={valor.nome} {...valor} />
            ))}
        </section>
    </>)
}