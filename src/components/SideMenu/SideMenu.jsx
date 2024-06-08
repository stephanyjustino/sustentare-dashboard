import styles from "./SideMenu.module.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

var destaquePrinc = ""
var destaqueFunc = ""
var destaqueCalend = ""
const estiloSelecionado = {color: "var(--gunmetal)", filter: "var(--borda-branca-icone)"}

export default function SideMenu({paginaAtual}){
    switch (paginaAtual){
        case "principal":
            destaquePrinc =  estiloSelecionado
            break
        case "funcionarios":
            destaqueFunc = estiloSelecionado
            break
        case "calendario":
            destaqueCalend = estiloSelecionado
            break
        default:
            throw new Error("Página atual do menu inválida!")
            break
    }

    return(
        <nav className={styles.menu}>
            <ul>
                <li><FontAwesomeIcon icon={"house"} style={destaquePrinc}/></li>
                <li><FontAwesomeIcon icon={"user"} style={destaqueFunc}/></li>
                <li><FontAwesomeIcon icon={"calendar"} style={destaqueCalend}/></li>
                <li><FontAwesomeIcon icon={"sign-out"}/></li>
            </ul>
        </nav>
    )
}