import styles from "./Icon.module.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export default function Icone({ nomeIcone }){
    return (
        <FontAwesomeIcon className="icon" icon={nomeIcone} />
    )
}