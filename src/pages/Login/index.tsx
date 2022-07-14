import {URL} from '../../env'
import React, { useState } from "react";
import { Box } from "@mui/system";
import { useNavigate } from "react-router";
import "./styles.css";
import VpnKeyIcon from '@mui/icons-material/VpnKey';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import CustomInput from "../../components/CustomInput";
import CustomButton from "../../components/CustomButton"
import Logo from "../../assets/logo_branco.png"
import HillsLogo from "../../assets/hills_logo.png"
import  Axios  from "axios";
export default function Login({
	onLogin,
}: {
	onLogin: () => void;
}): JSX.Element {
	const [usuario,setUsuario] = useState<string>('');
	const [senha,setSenha] = useState<string>('');
	const history = useNavigate();
	const handlerUsuario = function(e:React.ChangeEvent<HTMLInputElement|HTMLTextAreaElement>){
		setUsuario(e.target.value)
	}

	const handlerSenha = function(e:React.ChangeEvent<HTMLInputElement|HTMLTextAreaElement>){
		setSenha(e.target.value)
	}
	const auth:()=>Promise<void> = async function(){
		const body:{usuario:string,senha:string}={
			usuario,
			senha	
		}
		const resp = await Axios.post(URL+'/logar',body,{
			headers:{
				'Content-Type':'application/json',
				'Accept':'*/*'

			}	

		})

		if(resp.status !== 200) throw new Error("Login invalido")
			console.log(resp.data.access_token)
		//sessionStorage.setItem('__TOKEN',resp.data.access_token);
	          sessionStorage.setItem('__TOKEN','eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJtYWMiOiJzZWlsYSIsInNlcmlhbCI6InNlaWxhIiwiaWF0IjoxNjQ4ODMwOTM1fQ.ZLKZ8eEXMgAH987MzG7fWS6nN3Gdj9eHMaNhf4i_enU')
	}
	return (
		<Box
		display={"flex"}
		className="login-warp"
		>
			<div style={{display:"flex",flex:1,maxWidth:400,maxHeight:300,justifyContent:"center"}}>
				<img className="logo" style={{
					width:"100%",
					height:"100%"
				}} alt="logo_branco" src={Logo}/>
		</div>
		<div
		style={{
			flex: 1,
			display: "flex",
			flexDirection: "column",
			justifyContent: "space-evenly",
			alignItems: "center",
		}}
		>
			<div
			style={{
				flex: 1,
				display: "flex",
				flexDirection: "column",
				justifyContent: "space-evenly",
				alignItems: "center",
			}}
			>
				<div style={{display:"flex",alignItems:"center"}}>
					<AccountCircleIcon style={{marginRight:10,fontSize:40}} color="success"/>

					<CustomInput onChange={handlerUsuario} placeholder="Login"/>
				</div>
				<div style={{display:"flex",alignItems:"center"}}>
					<VpnKeyIcon style={{marginRight:10,fontSize:40}} color="success"/>

					<CustomInput onChange={handlerSenha} placeholder="Senha"/>
				</div>
			</div>
		</div>
		<div
		className="inputs-form"
		>
			<CustomButton onClick={async ()=>{
				try{
					await auth();
					onLogin();
					history("/destilacao",{replace:true})

				}catch(e){
					alert('Não foi possível logar. Por favor verifique as credenciais. Caso estejam corretas o servidor pode estar fora do ar.')
				}

			}} text="Entrar"/>
	</div>
	<div style={{
		flex:0.5,
		maxWidth:400,
		display:"flex",
		justifyContent:"center",
		alignItems:"center",
		flexDirection:"row"
	}}>
		<img alt="hills logo" style={{
			width:"20%",
			height:"100%"
		}} src={HillsLogo}/>
	<b style={{color:"white"}}>Hills Technologies</b>
</div>
</Box>
	);
}
