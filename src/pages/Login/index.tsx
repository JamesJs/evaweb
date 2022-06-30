import React from "react";
import { Box } from "@mui/system";
import { useNavigate } from "react-router";
import "./styles.css";
import VpnKeyIcon from '@mui/icons-material/VpnKey';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import CustomInput from "../../components/CustomInput";
import CustomButton from "../../components/CustomButton"
import Logo from "../../assets/logo_branco.png"
import HillsLogo from "../../assets/hills_logo.png"
export default function Login({
  onLogin,
}: {
  onLogin: () => void;
}): JSX.Element {
  const history = useNavigate();
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

				<CustomInput placeholder="Login"/>
			</div>
			<div style={{display:"flex",alignItems:"center"}}>
				<VpnKeyIcon style={{marginRight:10,fontSize:40}} color="success"/>

				<CustomInput placeholder="Senha"/>
			</div>
		</div>
  </div>
        <div
          className="inputs-form"
	  >
		  <CustomButton onClick={()=>{
			  onLogin();
			  history("/destilacao",{replace:true})
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
