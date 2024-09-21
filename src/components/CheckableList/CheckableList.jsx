import styles from './checkableList.module.css';
import {useState} from "react";

export default function CheckableList({opcoes}) {
    const TEXTO_GUIA = "Selecione uma opção"

    const [expandido, setExpandido] = useState(false);
    let classeExpandido = expandido ? styles.expandido : ""

    const [selecionado, setSelecionado] = useState(TEXTO_GUIA)
    function abrirMenu(){
        setSelecionado(TEXTO_GUIA)
        setExpandido(true)
    }
    function selecionarOpcao(o){
        setSelecionado(o)
        setExpandido(false)
    }

    opcoes = ["Alê", "Juliana", "Antônio"]

    return(
        <div className={styles.checkableList + " " + classeExpandido}>
            <span onClick={()=>abrirMenu()}>{selecionado}</span>
            <div className={styles.opcoes}>
                {opcoes.map((o) =>{
                    return (
                        <span key={o} onClick={()=>selecionarOpcao(o)}>
                            {o}
                        </span>
                    )
                })}
            </div>
        </div>
    )
}