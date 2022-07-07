import { Box } from "@mui/system"
import React from "react"
import LogoHills from "../../assets/hills_logo.png"
export default function Footer(){
	return(
		<Box style={{
			display:"flex",
			justifyContent:"center",
			marginTop:"auto",
			width:"100%",
			alignSelf:"flex-end"
			
		}}>
			<img alt="logo hills" src={LogoHills}
			style={{

				height:"100%",
				width:100
			}}/>

	</Box>
	)
}
