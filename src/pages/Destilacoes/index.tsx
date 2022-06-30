import React from "react";
import { Link } from "react-router-dom";
import CardLista from "../../components/CardLista";
import Lista from "../../components/Lista";
import SelectComp from "../../components/Select";
import "./styles.css";
export default function Destilacao() {
	return (
		<>  
			<h1 style={{textAlign:"left"}}>Destilações</h1>
			<div>
			{
				//<SelectComp />
			}
				<Lista
				lista={[
				<Link
				className="destilation-link"
				to="/chart"
				>
					<CardLista
					key={new Date().toString()}
					data={new Date().toString()}
					nome="teste"
					/>
				</Link>,
				<Link
				className="destilation-link"
				to="/chart"
				>
					<CardLista
					key={new Date().toString()}
					data={new Date().toString()}
					nome="teste"
					/>
				</Link>,

				]}
				/>
			</div>
		</>
	);
}
