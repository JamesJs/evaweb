import { styled } from '@mui/material/styles';
import TextField from '@mui/material/TextField';

const CssTextField = styled(TextField)({
	input:{
	 color:'white'

	},
	'& .MuiOutlinedInput-root': {
		'& fieldset': {
			borderColor: 'white',
		},
		'&:hover fieldset': {
			borderColor: 'white',

		},
		'&.Mui-focused fieldset': {
			borderColor: 'white',

		},
	},
});
export default CssTextField;
