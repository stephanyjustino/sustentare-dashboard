import axios from "axios"

export default async function modoDemonstracao(){
    var produtos = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]
    var meses = ["01","02","03","04","05","06","07","08","09","10","11","12"]
    var categorias_interacao = ["Adição", "Retirada"]
    
    var produtoSort = produtos[Math.floor(Math.random() * produtos.length)]
    var mesSort = meses[Math.floor(Math.random() * meses.length)]
    var categoriaSort = categorias_interacao[Math.floor(Math.random() * categorias_interacao.length)]

    var urlbase = "http://localhost:8080/interacoes-estoque"
    urlbase += `?idProduto=${produtoSort}`
    urlbase += `&fkFechamento=${1}`
    urlbase += `&idResponsavel=${100}`

    var objReq = {
        dataHora: `2024-${mesSort}-04 00:00:00`,
        categoriaInteracao: categoriaSort
    }   

    axios.post(urlbase, objReq).then((res) => {
        console.log(res)
    }).catch((err) => {
      console.error(err.response.data);
      console.error(err.response.status);
      console.error(err.response.headers);
    })
}
