import * as React from "react";
import List from "@mui/material/List";
import "./styles.css"
export default function Lista(props: any) {
  return (
    <List
      sx={{
        width: "100%",
        bgcolor: "background.paper",
      }}
    >
      {props.lista.map((item: any) => item)}
    </List>
  );
}
