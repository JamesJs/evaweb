import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import getDestilacoes from "../../api/pegaListaDest";
import CardLista from "../../components/CardLista";
import Lista from "../../components/Lista";
import SelectComp from "../../components/Select";
import "./styles.css";
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
			
			<Link
			className="destilation-link"
			to={"/chart?id="+destilacao.id+"&data="+(new Date(destilacao.data)).toLocaleString()}
			>
				<CardLista
				key={destilacao.id}
				data={destilacao.data}
				nome={"Destilação: "+destilacao.id}
				/>
			</Link>
		

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
