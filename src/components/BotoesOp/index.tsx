import * as React from "react";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import baixaCsv from "../../api/baixaCsv";
import "./styles.css"
export default function BotoesOp(props: any) {
  return (
    <ButtonGroup
      variant="contained"
      size="small"
      aria-label="outlined"
      {...props}
    >
	    <Button onClick={async ()=>{
		let a = document.createElement("a");
		a.download = props.data + ".csv"
		a.href = URL.createObjectURL(await baixaCsv(props.id));
		a.click();

	    }} size="small">Baixar CSV</Button>
    </ButtonGroup>
  );
}
