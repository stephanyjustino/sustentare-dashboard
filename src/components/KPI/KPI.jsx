import styles from "./KPI.module.css"
import Icon from "../Icon/Icon"

// Urgências possíveis de uma KPI
const urgencias = {
    alta: {background: "var(--grad-vermelho)"},
    media: {background: "var(--grad-amarelo)"},
    baixa: {background: "var(--grad-verde)"}
}
// Ícones para cada urgência
const iconesUrgencias = {
    alta: "circle-xmark",
    media: "circle-exclamation",
    baixa: "circle-check",
}

export default function KPI(props) {
    // Parâramentros padrão
    const {
        urgencia = "alta",
        tipo = "Tipo da KPI",
        descrValor = "Valor",
        valor = "0kg",
        nome = "Use os parâmetros para preencher a KPI"
    } = props

    if (!Object.keys(urgencias).includes(urgencia)){
        throw new Error("Urgência de KPI inválida.")
    }

    return (<>
        <div className={styles.KPI} style={urgencias[urgencia]}>
            <div>
                <p>{tipo}</p>
                <span>
                    <h2>{descrValor}</h2>
                    <h3>{valor}</h3>
                </span>
                <p>{nome}</p>
            </div>
            <Icon nomeIcone={iconesUrgencias[urgencia]}/>
        </div>
    </>)
}