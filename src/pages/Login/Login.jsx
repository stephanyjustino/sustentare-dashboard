import styles from "./login.module.css";
import { useNavigate } from "react-router-dom"; // Importa o hook useNavigate para redirecionamento de rotas
import { toast } from "react-toastify"; // Importa toast para exibir mensagens de sucesso ou erro
import React, { useState } from "react"; // Importa React e o hook useState para gerenciamento de estado
import Button from "../../components/Button/Button";
import TextInput from "../../components/TextInput/TextInput";
import api from "../../api";
/* import RedirectionList from "../../../components/RedirectionList/RedirectionList"
import MainMenu from "../MainMenu/MainMenu" */

const Login = () => {

    const navigate = useNavigate(); // Inicializa o hook de navegação
    const [nome, setNome] = useState(""); // Estado para armazenar o ano da música
    const [senha, setSenha] = useState(""); // Estado para armazenar o gênero da música

    const handleSave = () => {
        // TODO - Desabilitado até conclusão do Front.
        // const objetoAdicionado = { // Cria um objeto com os dados do formulário
        //     nome,
        //     senha
        // };
        //
        // // Faz uma requisição POST para a API
        // api.post(`/usuarios/login`, objetoAdicionado).then(() => {
        //     toast.success("Novo Card criado com sucesso!"); // Exibe uma mensagem de sucesso
        //     sessionStorage.setItem("editado", JSON.stringify(objetoAdicionado)); // Armazena os dados na sessionStorage
        //     navigate("/cadastro"); // Redireciona para a página de músicas
        // }).catch(() => {
        //     toast.error("Ocorreu um erro ao tentar realizar o login-e-entrada, por favor, tente novamente."); // Exibe uma mensagem de erro se a requisição falhar
        // })
        sessionStorage.setItem("nome_usuario", nome)
        navigate("/dashboardGeral"); // Redireciona para a página de músicas
    };

    const handleInputChange = (event, setStateFunction) => { // Função para manipular as mudanças nos inputs
        setStateFunction(event.target.value); // Atualiza o estado correspondente
    }

    sessionStorage.setItem(
        "icone_usuario", "https://i0.wp.com/ochin.com.br/wp-content/uploads/2023/04/1.jpg?fit=1024%2C974&ssl=1"
    )

    return (
        <div className={styles.login}>
            <h1>Paralelo 19</h1>
            <form>
                <TextInput label={"Nome:"} value={nome} onChange={(e) => handleInputChange(e, setNome)}/>
                <TextInput label={"Senha:"} value={senha} type="password" onChange={(e) => handleInputChange(e, setSenha)}/>
            </form>
            <Button insideText="Entrar" onClick={handleSave} />
        </div>

    );
};

export default Login;