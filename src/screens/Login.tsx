// Modules
import { 
  Typography, 
  Box, 
  Container,
  Button,
  TextField
} from '@mui/material'

export default function Login () {
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
          '& .MuiTypography-root': { mb: 2 }
        }}
        component="form"
        autoComplete='off'
      >
        <Typography variant='h5' component='h1'>Inicia sesión</Typography>
        <TextField variant='outlined' label='Correo' required/>
        <TextField variant='outlined' label='Contraseña' required type='password'/>
        <Button variant='contained' color='neutral'>Iniciar sesión</Button>
      </Box>
    </Container>
  )
}
