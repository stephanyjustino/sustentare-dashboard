export default function carregarKPIs(){
    // TODO Deixar dinâmico...
    return ([
        {
            urgencia: "alta",
            tipo: "Produto parado",
            descrValor: "Quejo",
            valor: "25kg",
            nome: "nenhuma saída à 28 dias"
        },
        {
            urgencia: "baixa",
            tipo: "Produto mais usado",
            descrValor: "Arroz",
            valor: "50kg",
            nome: "com 37 saídas"
        },
        {
            urgencia: "alta",
            tipo: "Perda",
            descrValor: "Carne",
            valor: "35kg",
            nome: "passou do vencimento"
        },
        {
            urgencia: "media",
            tipo: "Reposição",
            descrValor: "Dias",
            valor: "42",
            nome: "sem reposição"
        }
    ])
}