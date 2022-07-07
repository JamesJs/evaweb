
const Axios = require('axios');
const { URL } = require('../env');
const getDestilacoes = async function(){
	const _token = sessionStorage.getItem("__TOKEN");
	const _url = URL+'/destilacao';
	var axiosHeaders = { 'Content-Type' : 'application/json',
		'Authorization' : 'Bearer ' + _token,
		'Accept': '*/*' };

	var _listaDest = [];
	var _listaDestaux = [];
	//----------------------------------------------------------------------------------------------------
	const response = await Axios.get(_url,{
		headers: axiosHeaders
	})
	response.data.forEach((value)=>{
		_listaDestaux[_listaDestaux.length] = value
	})
	//------------------------------------------------------------------------------------------------------------------------------
	_listaDestaux.forEach((value)=>{
		_listaDest[_listaDest.length] = {"data" : value.data, "id" : value.id }
	})
	
	return _listaDest;
}  
export default getDestilacoes
