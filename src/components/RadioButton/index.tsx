import * as React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import "./styles.css"
export default function RadioButton({handlerChange,...props}:{handlerChange:(op:string)=>void}) {
  return (
    <FormControl {...props}>
      <FormLabel id="demo-row-radio-buttons-group-label">Parte</FormLabel>
      <RadioGroup
        onChange={(op)=>{
		
		console.log(op.target.value)
		handlerChange(op.target.value)
		}}
        defaultValue="cabeca"
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
      >
        <FormControlLabel value="cabeca" control={<Radio />} label="Cabeça" />
        <FormControlLabel value="coracao" control={<Radio />} label="Coração" />
        <FormControlLabel value="cauda" control={<Radio />} label="Cauda" />
        <FormControlLabel value="todos" control={<Radio />} label="Todos" />
      </RadioGroup>
    </FormControl>
  );
}
