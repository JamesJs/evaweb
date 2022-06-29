import React from "react";
import Paper from "@mui/material/Paper";
import { Box } from "@mui/system";
import { Button, TextField } from "@mui/material";
import { useNavigate } from "react-router";
import "./styles.css";
import CustomButton from "../../components/CustomButton"
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
      <Paper
        className="form-warp"
      >
        <p className="title-form">
          Login
        </p>
        <div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-evenly",
            alignItems: "center",
          }}
        >
          <TextField id="standard-basic" label="Usuário" variant="standard" />
          <TextField id="standard-basic" label="Senha" variant="standard" />
        </div>
        <div
          className="inputs-form"
	  >
		  <CustomButton/>
        </div>
      </Paper>
    </Box>
  );
}
