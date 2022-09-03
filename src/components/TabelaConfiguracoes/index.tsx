import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button } from '@mui/material';
import FormDialog from '../FormDialog';
import { buscarConfiguracoes,alterarConfiguracao } from '../../api/configuracoes';
import { copyFile } from 'fs';


function createData(
  campo: string,
  valor: string,
  Components:()=>JSX.Element
) {
  return { campo,valor,Components };
}



export default function TabelaConfiguracoes() {
	const [campoEdit,setCampoEdit] = React.useState('')
	const [campos,setCampos] = React.useState<{[campo:string]:string}>({});
  	React.useEffect(()=>{
	async function getCampos(){
		  const camposRemote:Array<{campo:string,valor:string}> = await buscarConfiguracoes();
		  const camposAux:{[campo:string]:string} = {};
		  camposRemote.sort((a,b)=>(a.campo.toLowerCase()>b.campo.toLowerCase() ? -1:1)).forEach((campo)=>{
			    camposAux[campo.campo] = campo.valor;
		  	})
		  setCampos(camposAux);
		 }	
		getCampos();
  	},[])
  const [openDialog,setOpenDialog] = React.useState<boolean>(false)
  console.log(campoEdit,campos[campoEdit])
  return (
    <>
    {openDialog && <FormDialog open={openDialog} campo={campoEdit} close={()=>{setOpenDialog(false)}} onConfirm={async (value:string)=>{
		const copyCampos = {...campos};
		copyCampos[campoEdit] = value
		setCampos(copyCampos)
		await alterarConfiguracao(campoEdit,value)
      }} initialValue={campos[campoEdit]} />}
    <TableContainer component={Paper}>
    
      <Table size="medium" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>Campo</TableCell>
            <TableCell align="center">Valor</TableCell>
            <TableCell align="right">Opções</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {Object.keys(campos).map((key) => (
            <TableRow
              key={key}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {key}
              </TableCell>
	      <TableCell align="center">{campos[key]}</TableCell>
	      <TableCell align="right"><Button onClick={()=>{setCampoEdit(key);setOpenDialog(true)}}>Alterar</Button></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </>
  );
}
