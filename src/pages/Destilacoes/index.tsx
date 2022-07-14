import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import getDestilacoes from "../../api/pegaListaDest";
import CardLista from "../../components/CardLista";
import Lista from "../../components/Lista";
import SelectComp from "../../components/Select";
import DeleteIcon from '@mui/icons-material/Delete';
import "./styles.css";
import { deletaDestilacao } from "../../api/dadosDestilacao";
export default function Destilacao() {
	const [destilacoes,setDestilacoes] = useState<Array<{
		id:number,
		data:string

	}>>([]);
	useEffect(()=>{


		getDestilacoes().then((response)=>{
			setDestilacoes(response);
		})

	},[])
	function createListItens(){
		return destilacoes.map((destilacao)=>(
			<div key={`${destilacao.id}`} style={{display:"flex",alignItems:"center",justifyContent:"space-between"}}>	
				<div>
					<Link
					className="destilation-link"
					to={"/chart?id="+destilacao.id+"&data="+(new Date(destilacao.data)).toLocaleString("pt-Br")}
					>
						<CardLista
						key={destilacao.id}
						data={(new Date(destilacao.data)).toLocaleString("pt-Br")}
						nome={"Destilação: "+destilacao.id}
						/>
					</Link>
				</div>
				<div>
					<DeleteIcon onClick={async ()=> await deletaDestilacao(destilacao.id)}/>
				</div>
			</div>


		))


	}

	return (
		<>  
			<h1 style={{textAlign:"left"}}>Destilações</h1>
			<div>
			{
				//<SelectComp />
			}
			<Lista
			lista={createListItens()}
			/>
		</div>
	</>
	);
}
