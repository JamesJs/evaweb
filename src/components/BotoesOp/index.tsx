import * as React from "react";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import "./styles.css"
export default function BotoesOp(props: any) {
  return (
    <ButtonGroup
      variant="contained"
      size="small"
      aria-label="outlined"
      {...props}
    >
      <Button size="small">Baixar CSV</Button>
    </ButtonGroup>
  );
}
