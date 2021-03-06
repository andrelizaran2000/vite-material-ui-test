// Modules
import { useForm } from 'react-hook-form';
import { grey, orange } from '@mui/material/colors';
import { Button, Grid, Typography } from '@mui/material'

// Components
import UiContainer from '../containers/UiContainer';
import CustomTextField from '../components/CustomTextField';
import { FormContainer, PaperContainer } from '../containers/Containers';

// Hooks
import useBindActions from '../hooks/useBindActions';

// RegExp
import { regExpCommon } from '../utils/regExp';

// Types
import { UserType } from '../store/types/user';
import { SnackbarType } from '../store/types/snackbar';

export default function LoginWithGrid() {
  return (
    <UiContainer>
      <Grid container sx={{ width:'100%', height:'100vh' }}>
        <Grid
          item
          xs={0}
          md={6}
          lg={7}
          sx={{ height:'100vh', background:orange[500] }}      >
        </Grid>
        <Grid
          item
          xs={12}
          md={6}
          lg={5}
          sx={{
            height:'100vh',
            background:grey[800],
            padding:4,
            display:'flex',
            flexDirection:'column',
            justifyContent:'center'
          }}
        >
          <LoginContainer/>
        </Grid>
      </Grid>
    </UiContainer>
  )
}

function LoginContainer () {

  const {
    register,
    handleSubmit,
    formState,
  } = useForm();

  const { userBindActions, snackbarBindActions } = useBindActions();
  const { signInUser } = userBindActions
  const { showSnackbar } = snackbarBindActions

  function onSubmit (data:any) {
    console.log(data)
    signInUser(dummyUserPayload);
    showSnackbar(dummySnackbarPayload)
  }

  return (
    <PaperContainer>
      <FormContainer
        component='form' 
        onSubmit={handleSubmit(onSubmit)}
        sx={{ '& .MuiTextField-root': { mb: 3, width: '100%' } }}
      >
        <Typography variant='h6' component='h2' mb={2}>Iniciar sesión</Typography>
        <CustomTextField
          formState={formState}
          label='Email'
          inputName='email'
          register={register}
          type='email'
        />
        <CustomTextField
          formState={formState}
          label='Contraseña'
          inputName='password'
          register={register}
          type='password'
          pattern={regExpCommon.password}
        />
        <Button
          variant='contained'
          type='submit'
        >Entrar</Button>
      </FormContainer>
    </PaperContainer>
  )
}

const dummyUserPayload:UserType = {
  displayName:'André Lizarán',
  enterprise:'MM103',
  profilePic:'ppA1.jpg',
  userType:'admin'
}

const dummySnackbarPayload:SnackbarType = {
  message:'Login user',
  title:'Login user',
  type:'successful'
}