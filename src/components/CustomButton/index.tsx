import { ButtonProps } from "@mui/material";
import React from "react"
import ColorButton from "./styles";
export default function CustomButton({text,onClick,...props}:{text:string,onClick:()=>void,props?:ButtonProps}){
	return(
		<ColorButton {...props} onClick={onClick} variant="contained">{text}</ColorButton>
	

	)
}
