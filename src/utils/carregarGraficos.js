import axios from "axios"

const api = axios.create({
    baseURL: "http://localhost:8080/graficos/"
})

var endpoints = ["entradaSaidaMes", "vencerNaSemana"]

async function graficoColunasInOut(){
    const meses = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const res = await api.get(endpoints[0])
    let dados = res.data

    var datasets = [
        {
            label: 'Entradas',
            data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            backgroundColor: 'rgba(54, 162, 235, 0.6)',
            borderColor: 'rgba(54, 162, 235, 1)',
            borderWidth: 1,
        },
        {
            label: 'Saídas',
            data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            backgroundColor: 'rgba(255, 99, 132, 0.6)',
            borderColor: 'rgba(255, 99, 132, 1)',
            borderWidth: 1
        }
    ]

    for(let i in dados){
        for(let posicao in meses){
            if(meses[posicao] == dados[i].mes){

                datasets[0]["data"][posicao] = dados[i].entradas
                datasets[1]["data"][posicao] = dados[i].saidas
                break
            }
        }
        
    }
    console.log(dados)
    return datasets
}

export default async function carregarGraficos(){
    var dictDadosGraficos = {
        "grafico_colunas": await graficoColunasInOut()
    }
    return dictDadosGraficos
}