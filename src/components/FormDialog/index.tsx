import React, { useEffect, useRef, useState } from 'react'
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Button } from '@mui/material';

export default function FormDialog({open,onConfirm,close,initialValue,campo}:{campo:string,open:boolean,onConfirm:(value:string)=>void,close:()=>void,initialValue:string}) {
  const [text,setText] = useState(initialValue);
  return (
    <div>
     <Dialog open={open} onClose={()=>{setText('');close()}}>
        <DialogTitle>Campo: {campo}</DialogTitle>
        <DialogContent>
          <DialogContentText>
	  	Digite o novo valor
          </DialogContentText>
          <TextField
	    autoFocus
	    value={text}
	    onChange={(e)=>setText(e.target.value)}
            margin="dense"
            id="name"
            type="text"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
		<Button onClick={()=>{close()}}>Cancel</Button>
		<Button onClick={()=>{onConfirm(text);close()}}>Confirmar</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
