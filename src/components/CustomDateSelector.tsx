// Modules
import { 
  FieldValues, 
  FormState, 
  UseFormRegister 
} from 'react-hook-form';
import { TextField } from '@mui/material';

type Props = {
  label:string;
  inputName:string;
  register:UseFormRegister<FieldValues>;
  formState:FormState<FieldValues>;
  required?:boolean;
}

export default function CustomDateSelector (props:Props) {

  const { 
    label, 
    inputName, 
    register, 
    formState:{ errors },
    required = true,
  } = props;

  return (
    <TextField
      type='date'
      {...register(inputName, { required })}
      error={(errors[inputName]?.type === 'required')}
      helperText={errors[inputName]?.type === 'required' ? 'Campo necesario' : ''}
    />
  )
}