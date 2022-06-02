// Modules
import { 
  FieldValues, 
  FormState, 
  UseFormRegister 
} from 'react-hook-form';
import { MenuItem, TextField } from '@mui/material';

type Props = {
  label:string;
  inputName:string;
  register:UseFormRegister<FieldValues>;
  formState:FormState<FieldValues>;
  required?:boolean;
  options: { value:string | number, label:string }[] 
}

export default function CustomSelect (props:Props) {

  const { 
    label, 
    inputName, 
    register, 
    formState:{ errors },
    required = true,
    options
  } = props;

  return (
    <TextField
      defaultValue={options[0].value || '' }
      label={label}
      select
      {...register(inputName, { required })}
      error={(errors[inputName]?.type === 'required')}
      helperText={errors[inputName]?.type === 'required' ? 'Campo necesario' : ''}
    >
      { options.map((item) => (
        <MenuItem key={item.value} value={item.value}>
          {item.label}
        </MenuItem>
      ))}
    </TextField>
  )
}