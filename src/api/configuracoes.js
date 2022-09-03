import axios from "axios";
import { URL } from "../env";

async function buscarConfiguracoes(){
	const configuracoes = await axios.get(URL+"/configuracao");
	console.log(configuracoes.data)
	return configuracoes.data;
} 

async function alterarConfiguracao(campo,valor){
	await axios.patch(URL+"/configuracao/"+campo,{valor})
}

export {buscarConfiguracoes,alterarConfiguracao}
