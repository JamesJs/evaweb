import Axios from "axios"
import { URL } from "../env";


async function deletaDestilacao(id){

	const _token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJtYWMiOiJzZWlsYSIsInNlcmlhbCI6InNlaWxhIiwiaWF0IjoxNjQ4ODMwOTM1fQ.ZLKZ8eEXMgAH987MzG7fWS6nN3Gdj9eHMaNhf4i_enU"
	const _url = URL+"/destilacao/"+id;
	
	var axiosHeaders = { 'Content-Type' : 'application/json',
		'Authorization' : 'Bearer ' + _token,
		'Accept': '*/*' };
	const response = await Axios.delete(_url,{headers:axiosHeaders});
	if(response.status !== 200) throw new Error(response.data);
	

}

async function getDados(id){
	const _token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJtYWMiOiJzZWlsYSIsInNlcmlhbCI6InNlaWxhIiwiaWF0IjoxNjQ4ODMwOTM1fQ.ZLKZ8eEXMgAH987MzG7fWS6nN3Gdj9eHMaNhf4i_enU"
	const _url = URL+'/destilacao/'+id+'/dadosDestilacao'
	var axiosHeaders = { 'Content-Type' : 'application/json',
		'Authorization' : 'Bearer ' + _token,
		'Accept': '*/*' };

	var _listaCabeca = [];
	let media_temp_cabeca = 0;
	let media_gl_cabeca = 0;
	let litros_cabeca = 0;
	let media_temp_coracao = 0;
	let media_gl_coracao = 0;
	let litros_coracao = 0;
	let media_temp_cauda = 0;
	let media_gl_cauda = 0;
	let litros_cauda = 0;
	var _listaCoracao = [];
	var _listaCauda = [];
	var _pontosCabeca = [];
	var _pontosCauda = [];
	var _pontosCoracao = [];
	const response = await Axios.get(_url,{
		headers: axiosHeaders})
	response.data.forEach((value)=>{
		switch (value.parte) {
			case 'cabeca':
				_listaCabeca[_listaCabeca.length] = value
				break;
			case 'coracao':
				_listaCoracao[_listaCoracao.length] = value
				break;
			case 'cauda':
				_listaCauda[_listaCauda.length] = value
				break;
			default:
				console.log("Não achado")
		}
	})
	//------------------------------------------------------------------------------------------------------------------------------
	_listaCabeca.forEach((value)=>{
		media_gl_cabeca = media_gl_cabeca + value.gl;
		media_temp_cabeca = media_temp_cabeca + value.temperatura
		_pontosCabeca[_pontosCabeca.length] = {"GL" : value.gl, "Temp" : value.temperatura, "amt" : value.litros, "name" : new Date(value.data).toLocaleTimeString("pt-Br",{timeStyle:"short",timeZone:"UTC"}) }
	})

	_listaCoracao.forEach((value)=>{
		media_gl_coracao = media_gl_coracao + value.gl;
		media_temp_coracao = media_temp_coracao + value.temperatura
		_pontosCoracao[_pontosCoracao.length] = {"GL" : value.gl, "Temp" : value.temperatura, "amt" : value.litros, "name" : new Date(value.data).toLocaleTimeString("pt-Br",{timeStyle:"short",timeZone:"UTC"}) }
	})

	_listaCauda.forEach((value)=>{
		media_gl_cauda = media_gl_cauda + value.gl;
		media_temp_cauda = media_temp_cauda + value.temperatura
		_pontosCauda[_pontosCauda.length] = {"GL" : value.gl, "Temp" : value.temperatura, "amt" : value.litros, "name" : new Date(value.data).toLocaleTimeString("pt-Br",{timeStyle:"short",timeZone:"UTC"}) }
	})


	let sumLitros = 0
	if(_pontosCoracao.length > 0) sumLitros = sumLitros + _pontosCoracao[_pontosCoracao.length - 1]["atm"]
	if(_pontosCabeca.length > 0) sumLitros = sumLitros + _pontosCabeca[_pontosCabeca.length - 1]["atm"]
	if(_pontosCauda.length > 0) sumLitros = sumLitros + _pontosCauda[_pontosCauda.length - 1]["atm"]

	return {
		mediaTodos:{
			temp:((media_temp_coracao+media_temp_cauda+media_temp_cabeca)/(_pontosCoracao.length+_pontosCauda.length+_pontosCabeca.length) || 0).toFixed(2), gl:((media_gl_coracao+media_gl_cauda+media_gl_cabeca)/(_pontosCauda.length+_pontosCabeca.length+_pontosCoracao.length) || 0).toFixed(2), litros:sumLitros},
		mediaCabeca:{
			temp:((media_temp_cabeca/_pontosCabeca.length) || 0).toFixed(2), gl:((media_gl_cabeca/_pontosCabeca.length) || 0).toFixed(2),litros:(_pontosCabeca.length > 0 ? _pontosCabeca[_pontosCabeca.length - 1]["amt"]: 0).toFixed(2)
		},
		mediaCauda:{
			temp:((media_temp_cauda/_pontosCauda.length) || 0).toFixed(2), gl:((media_gl_cauda/_pontosCauda.length) || 0).toFixed(2)      ,litros:(_pontosCauda.length > 0 ? _pontosCauda[_pontosCauda.length - 1]["amt"] : 0).toFixed(2)
		},
		mediaCoracao:{

			temp:((media_temp_coracao/_pontosCoracao.length) || 0).toFixed(2), gl:((media_gl_coracao/_pontosCoracao.length) || 0).toFixed(2),litros:(_pontosCoracao.length > 0 ? _pontosCoracao[_pontosCoracao.length-1]["amt"] : 0).toFixed(2)
		},
		_pontosCabeca,
		_pontosCoracao,
		_pontosCauda
	}
}

export {getDados,deletaDestilacao}
