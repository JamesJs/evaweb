import React from "react"
import {URL} from "../env"
export default async function baixaCsv(id){

	const url = `${URL}/destilacao/${id}/dadosDestilacao`;
	var httpHeaders = { 'Content-Type' : 'application/json',
		'Authorization' : 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJtYWMiOiJzZWlsYSIsInNlcmlhbCI6InNlaWxhIiwiaWF0IjoxNjQ4ODMwOTM1fQ.ZLKZ8eEXMgAH987MzG7fWS6nN3Gdj9eHMaNhf4i_enU',
		'Accept': '*/*' };
	const Axios = require('axios')

	var dados = [];

	let response = await Axios.get(url,{
		headers: httpHeaders
	})
	
	var csv = 'data, parte, gl, temperatura, litros\n';
	response.data.forEach((value)=>{

			dados[dados.length] = {
				//"id": value.id,
				"parte": value.parte,
				"data": value.data,
				"gl": value.gl,
				"litros": value.litros,
				"temperatura": value.temperatura,
				//"modo": value.modo
			}
			//console.log(dados[dados.length-1].id)

			dados.forEach(function(row) {
				csv += row.data;
				csv += ','+ row.parte;
				csv += ','+ row.gl;
				csv += ','+ row.temperatura;
				csv += ','+ row.litros;
				csv += '\n';
			});
			//console.log(csv);

	})
	
	let blob = new Blob([csv],{type:'text/plain'})	
	return blob;
     }
