// Modules
import { 
  Box, 
  Button, 
  Checkbox, 
  FormControlLabel, 
  Snackbar, 
  Stack,
  Typography
} from '@mui/material';
import { useState } from 'react';
import { Container } from '@mui/system';
import { useForm } from 'react-hook-form';
import { grey } from '@mui/material/colors';

// Components
import CustomSelect from '../components/CustomSelect';
import CustomTextField from '../components/CustomTextField';
import CustomDateSelector from '../components/CustomDateSelector';
import UserDialog from '../components/UserDialog';

export const productTypes = [
  { value:0, label:'Electrónica' },
  { value:1, label:'Limpieza' },
  { value:2, label:'Comestibles' },
  { value:3, label:'Juguetes' },
  { value:4, label:'Videojuegos' },
]

const userOptions = [
  { alias:'Yeli', email:'yelitza@gmail.com' },
  { alias:'Cass', email:'cass@gmail.com' },
  { alias:'Meli', email:'meli@gmail.com' },
  { alias:'Julio', email:'julio@gmail.com' },
]

export default function ProductForm () {

  const {
    register,
    handleSubmit,
    formState,
  } = useForm();

  const [showDialog, setShowDialog] = useState(false);
  const [usuarioActual, setUsuarioActual] = useState(userOptions[0]);
  const [showMessage, setShowMessage] = useState(false)

  function onSubmit (data:any) {
    console.log(data)
    setShowMessage(true)
  }

  function handleClose () {
    setShowDialog(false)
  }

  return (
    <Container sx={{ height:'100vh', backgroundColor:'', display:'flex', alignItems:'center' }}>
      <Box 
        sx={{ 
          padding:4, 
          border:1, 
          borderColor:'lightgray',
          borderRadius:2, width:'100%', 
          display:'flex', 
          flexDirection:'column', 
          '& .MuiTextField-root': { mb: 3, width: '100%' },
        }}
        component="form"
        autoComplete='off'
        onSubmit={handleSubmit(onSubmit)}
      >
        <Typography variant='h5' component='h2'>Guardar producto</Typography>
        <Typography variant='subtitle1' mb={3} color={grey[600]}>Usuario actual: {usuarioActual.alias}</Typography> 
        <CustomSelect
          label='Tipo de producto'
          formState={formState}
          inputName='productType'
          register={register}
          options={productTypes}
        />
        <CustomTextField 
          formState={formState}
          label='Nombre del producto'
          inputName='productName'
          register={register}
        /> 
        <CustomTextField 
          formState={formState}
          label='Marca del producto'
          inputName='productBrand'
          register={register}
        /> 
        <CustomDateSelector
          formState={formState}
          inputName='productDate'
          label='Registra la fecha de ingreso'
          register={register}
        />
        <CustomTextField 
          formState={formState}
          label='Precio de producto'
          inputName='productPrice'
          maxLength={7}
          minLength={2}
          register={register}
        />
        <Stack 
          direction="row" 
          spacing={2} 
          mb={2}
        >
          <FormControlLabel 
            control={<Checkbox defaultChecked />} 
            label="Aplican promociones" 
          />
          <FormControlLabel 
            control={<Checkbox/>} 
            label="Aplica garantía extendida" 
          />
        </Stack>

        <Stack direction='row' spacing={2}>
          <Button   
            variant='contained' 
            color='primary'
            type='submit'
            fullWidth
          >Salvar</Button>
          <Button   
            variant='contained' 
            color='neutral'
            onClick={() => setShowDialog(true)}
            fullWidth
            type='button'
          >Mostrar usuarios</Button>
        </Stack>

        <UserDialog
          onClose={handleClose}
          open={showDialog}
          users={userOptions}
          setUsuarioActual={setUsuarioActual}
        />

        <Snackbar
          open={showMessage}
          autoHideDuration={6000}
          onClose={() => setShowMessage(false)}
          message="Producto creado"
        />

      </Box>
    </Container>
  )
}