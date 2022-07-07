import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import ChartBar from "../../components/BarChart";
import "./styles.css"
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function Home() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Paper>
        <h1 className="title-home">Bem vindo ao EvaWeb.</h1>
        <h2 className="subtitle-home">
          Para acessar as destilações use o menu sanduiche ao lado.
        </h2>
      </Paper>
      <Grid container spacing={30}>
        <Grid item sx={{ flex: 1, display: "flex", marginBottom: 10 }}>
          <Item sx={{ width: "100%", height: 400 }}>
            <ChartBar />
          </Item>
        </Grid>
      </Grid>
      <Grid
        container
        spacing={10}
        alignItems={"center"}
        justifyContent="center"
      >
        <Grid item>
          <Item>
            <div>
              <h2>Valor médio da temperatura nas destilações do último mês</h2>
              <h3>40 C</h3>
            </div>
          </Item>
        </Grid>
        <Grid item>
          <Item>
            <div>
              <h2>Valor médio do GL nas destilações do último mês</h2>
              <h3>100 C</h3>
            </div>
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
}
