import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import "./styles.css"
export default function SelectComp() {
  const [dia, setDia] = React.useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setDia(event.target.value as string);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Dia</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={dia}
          label="Dia"
          onChange={handleChange}
        >
          <MenuItem value={new Date().toDateString()}>
            {new Date().toDateString()}
          </MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
