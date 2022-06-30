import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import { Avatar, ButtonBase, ListItem, Typography } from "@mui/material";
import React, { PropsWithChildren } from "react";
import "./styles.css"
import Gota from "../../assets/gota.png"
export default function CardLista(props: PropsWithChildren<any>) {
  return (
    <ButtonBase
      sx={{
        width: "100%",
      }}
    >
      <ListItem alignItems="flex-start">
        <ListItemAvatar style={{display:"flex",alignItems:"center"}}>
		<img alt="gota" src={Gota} style={{
			width:40
		}} />
        </ListItemAvatar>

        <ListItemText
          primary={props.data}
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: "inline" }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                {props.nome}
              </Typography>
              {props?.descricao && props.descricao}
            </React.Fragment>
          }
        />
      </ListItem>
    </ButtonBase>
  );
}
