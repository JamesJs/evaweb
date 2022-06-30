import { Box } from "@mui/system"
import React from "react"
import LogoHills from "../../assets/hills_logo.png"
export default function Footer(){
	return(
		<Box sx={{
			width:"100%",
			height:100,
			position:"fixed",	
			display:"flex",
			bottom:0,
			alignItems:"center",
			justifyContent:"center"
		}}>
			<img alt="logo hills" src={LogoHills}
			style={{

				height:"100%",
				width:100
			}}/>

	</Box>
	)
}
