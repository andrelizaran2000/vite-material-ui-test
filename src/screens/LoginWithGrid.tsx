// Modules
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { grey, orange } from '@mui/material/colors';
import { Button, Grid, Typography } from '@mui/material'

// Actions
import { userActions, snackbarActions } from '../store/actions/index'

// Components
import UiContainer from '../containers/UiContainer';
import CustomTextField from '../components/CustomTextField';
import { FormContainer, PaperContainer } from '../containers/Containers';

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
          lg={8}
          sx={{ height:'100vh', background:orange[500] }}      >
        </Grid>
        <Grid
          item
          xs={12}
          md={6}
          lg={4}
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

  const dispatch = useDispatch();
  const { signInUser } = bindActionCreators(userActions, dispatch)
  const { showSnackbar } = bindActionCreators(snackbarActions, dispatch);

  function onSubmit (data:any) {
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