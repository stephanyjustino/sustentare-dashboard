import Pilha from "./pilha"
import KPI from "./KPI"
import axios from "axios"

const api = axios.create({
    baseURL: "http://localhost:8080/kpis/"
})

const endpoints = ["itemMaisAntigo", "ultimaAdicao", "maiorRetirada", "itemMaisAntigo"]

const pilha = new Pilha()

async function kpiItemMaisAntigo(){
    const res = await api.get(endpoints[0]);
    let dados = res.data

    let itemVencido = dados[0]
    
    let dias = itemVencido.dias_no_estoque + " dias sem sair"
    if (itemVencido.vencido == 1) {
        dias += ` (${itemVencido.dias_pos_vencimento} dia(s) depois do fim da validade)`
    }

    let prioridade = itemVencido.porcentagem_do_prazo < 75 ? "media" : "alta"
        
    return new KPI(prioridade, "Item parado no estoque", itemVencido.nome, "", dias)
}

async function kpiUltimaAdicao(){
    const res = await api.get(endpoints[1])
    let dados = res.data

    let nomeProd = dados.produto.nome
    
    let unidadeMedida = (dados.produto.item.unidade_medida.nome).toLowerCase()

    let qtd = dados.produto.qtdProduto
    qtd = `${qtd} ${unidadeMedida}${qtd > 1 ? "s" : ""}`
    
    return new KPI("baixa", "Última entrada", nomeProd, "", qtd)
}

async function kpiMaiorRetirada(){
    const res = await api.get(endpoints[2])
    let dados = res.data
    
    let produtoMaiorQtd = {
        nome: "",
        unidadeMedida: "",
        quantidade: Number.MIN_SAFE_INTEGER
    }
    for(let i in dados){
        let produtoAtual = dados[i]["produto"]

        if ((produtoAtual.qtdProduto * produtoAtual.qtdMedida) > produtoMaiorQtd.quantidade){
            produtoMaiorQtd = {
                nome: produtoAtual.nome,
                unidadeMedida: produtoAtual.item.unidade_medida.nome,
                qtd: produtoAtual.qtdProduto
            }
        }
    }
    produtoMaiorQtd.unidadeMedida = produtoMaiorQtd.unidadeMedida.toLowerCase()

    return new KPI(
        "baixa", "Entrada com maior quantidade", produtoMaiorQtd.qtd, produtoMaiorQtd.unidadeMedida, 
        produtoMaiorQtd.nome
    )
}

async function kpiVencimento(){
    const res = await api.get(endpoints[3])
    let dados = res.data

    let prodVencimentoRecente = {
        nome: "",
        diasVencimento: Number.MAX_SAFE_INTEGER
    }
    for(let i in dados){
        var produtoAtual = dados[i]

        if (produtoAtual.dias_vencimento > 0 &&
            produtoAtual.dias_vencimento < prodVencimentoRecente.diasVencimento){
            
                prodVencimentoRecente = {
                    nome: produtoAtual.nome,
                    diasVencimento: produtoAtual.dias_vencimento
                }
        }
    }

    let momento = ""
    if (prodVencimentoRecente.diasVencimento == 0){
        momento = "hoje"
    } else {
        momento = `a ${prodVencimentoRecente.diasVencimento} dia`
        if (prodVencimentoRecente.diasVencimento > 1){
            momento += "s"
        }
    }

    return new KPI("alta", "Perda", prodVencimentoRecente.nome, "", momento)
}

export default async function carregarKPIs(){
    var resultados = []

    resultados.push(await kpiItemMaisAntigo())
    resultados.push(await kpiUltimaAdicao())
    resultados.push(await kpiMaiorRetirada())
    resultados.push(await kpiVencimento())

    return resultados
}