// Modules
import { 
  FieldValues, 
  FormState, 
  UseFormRegister, 
  ValidationRule
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
  pattern?: ValidationRule<RegExp>;
}

export default function CustomTextField(props:Props) {

  const { 
    label, 
    inputName, 
    register, 
    formState:{ errors },
    required = true,
    minLength,
    maxLength,
    type = 'text',
    startAdornment,
    pattern
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
            maxLength,
            minLength,
            pattern
          }
        )
      }
      error={
        (errors[inputName]?.type === 'required') ||
        (errors[inputName]?.type === 'minLength') || 
        (errors[inputName]?.type === 'maxLength') || 
        (errors[inputName]?.type === 'pattern')
      }
      helperText={`
        ${errors[inputName]?.type === 'required' ? 'Campo necesario' : ''}
        ${errors[inputName]?.type === 'maxLength' ? `Campo no puede tener más de ${maxLength} caracteres` : ''}
        ${errors[inputName]?.type === 'minLength' ? `Campo no puede tener menos de ${minLength} caracteres` : ''}
        ${errors[inputName]?.type === 'pattern' ? `Campo no cumple con la expresión requerida` : ''}
      `}
      InputProps={{
        startAdornment: startAdornment ? <InputAdornment position="start">{startAdornment}</InputAdornment> : undefined,
      }}
    />
  )
}
