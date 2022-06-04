// Modules
import { 
  Typography, 
  Button,
  TextField,


} from '@mui/material'

// Components
import { 
  ContainerCentered, FormContainer, PaperContainer, 
} from '../containers/Containers'

export default function Login () {

  function onSubmit () {
  }

  return (
    <ContainerCentered>
      <PaperContainer sx={{ width:'65%' }}>
        <FormContainer
          component='form' 
          onSubmit={() => onSubmit()}
          sx={{ '& .MuiTextField-root': { mb: 3, width: '100%' } }}>


          <Typography variant='h5' component='h1' mb={3}>Inicia sesión</Typography>
          <TextField variant='outlined' label='Correo' required/>
          <TextField variant='outlined' label='Contraseña' required type='password'/>
          <Button variant='contained' color='neutral'>Iniciar sesión</Button>

          
        </FormContainer> 
      </PaperContainer>
    </ContainerCentered>
  )
}
