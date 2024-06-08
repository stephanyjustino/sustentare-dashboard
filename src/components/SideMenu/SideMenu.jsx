import styles from "./SideMenu.module.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

var destaquePrinc = ""
var destaqueFunc = ""
var destaqueCalend = ""

export default function SideMenu({paginaAtual}){
    console.log(paginaAtual)
    console.log(paginaAtual == "principal")
    switch (paginaAtual){
        case "principal":
            destaquePrinc = {color: "var(--gunmetal)", filter: "var(--borda-branca-icone)"}
            break
        case "funcionarios":
            destaqueFunc = "paginaAtual"
            break
        case "calendario":
            destaqueCalend = "paginaAtual"
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