function getCor(nomeCor){
    return getComputedStyle(document.body).getPropertyValue(`--${nomeCor}`)
}
function setCor(nomeCor, novoValor){
    document.documentElement.style.setProperty(`--${nomeCor}`, novoValor)
}

const preto = getCor("preto")
const branco = getCor("branco")
const gunmetal = getCor("gunmetal")
const carvao = getCor("carvao")
const cinza = getCor("cinza")

var temaEscuro = false

export default function mudarTema(){
    if (!temaEscuro){
        setCor("preto", branco)
        setCor("branco", preto)
        setCor("gunmetal", branco)
        setCor("carvao", cinza)
        temaEscuro = true
    } else{
        setCor("preto", preto)
        setCor("branco", branco)
        setCor("gunmetal", gunmetal)
        setCor("carvao", carvao)
        temaEscuro = false
    }
}