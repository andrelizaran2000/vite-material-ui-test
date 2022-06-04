// Modules
import { 
  FieldValues, 
  FormState, 
  UseFormRegister 
} from 'react-hook-form';
import { InputAdornment, TextField } from '@mui/material';

type Props = {
  label:string;
  inputName:string;
  register:UseFormRegister<FieldValues>;
  formState:FormState<FieldValues>;
  minLength?:number;
  maxLength?:number;
  required?:boolean;
  type?: 'number' | 'text' | 'email' | 'password';
  startAdornment?:string
}

export default function CustomTextField(props:Props) {

  const { 
    label, 
    inputName, 
    register, 
    formState:{ errors },
    required = true,
    minLength = 0,
    maxLength = 0,
    type = 'text',
    startAdornment 
  } = props;

  return (
    <TextField
      label={label}
      type={type}
      {
        ...register(
          inputName, 
          { 
            required, 
            maxLength: maxLength !== 0 ? maxLength : undefined, 
            minLength: minLength !== 0 ? minLength : undefined, 
          }
        )
      }
      error={
        (errors[inputName]?.type === 'required') ||
        (errors[inputName]?.type === 'minLength') || 
        (errors[inputName]?.type === 'maxLength') 
      }
      helperText={`
        ${errors[inputName]?.type === 'required' ? 'Campo necesario' : ''}
        ${errors[inputName]?.type === 'maxLength' ? `Campo no puede tener más de ${maxLength} caracteres` : ''}
        ${errors[inputName]?.type === 'minLength' ? `Campo no puede tener menos de ${minLength} caracteres` : ''}
      `}
      InputProps={{
        startAdornment: startAdornment ? <InputAdornment position="start">{startAdornment}</InputAdornment> : undefined,
      }}
    />
  )
}
