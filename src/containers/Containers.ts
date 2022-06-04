// Modules
import styled from '@emotion/styled';
import { 
  Box,
  BoxProps,
  Paper, 
  PaperProps
} from '@mui/material';
import { grey } from '@mui/material/colors';

export const ContainerCentered = styled(Box)<BoxProps>(({ theme }) => ({
  height:'100vh',
  backgroundColor:grey[300], 
  display:'flex', 
  alignItems:'center',
  justifyContent:'center',
  padding:'0 20px'
}));

export const PaperContainer = styled(Paper)<PaperProps>(({ theme }) => ({
  padding:20, 
  borderRadius:2,
  display:'flex', 
  flexDirection:'column', 
}));

export const FormContainer = styled(Box)<BoxProps>(({ theme }) => ({
  display:'flex',
  flexDirection:'column',
}));