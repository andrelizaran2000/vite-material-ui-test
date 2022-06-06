// Modules
import { 
  Box, 
  Paper, 
  Table, 
  TableCell, 
  TableContainer,
  TableHead, 
  TableRow
} from '@mui/material'
import { grey } from '@mui/material/colors'

export default function Home() {
  return (
    <Box 
      sx={{ 
        backgroundColor:grey[800], 
        height:'100vh',
        width:'100%',
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
      }}
    >

    </Box>
  )
}

function ProductsTable () {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ width:'100%' }}>
        <TableHead>
          <TableRow>
            <TableCell>Nombre del producto</TableCell>
            <TableCell>Marca</TableCell>
            <TableCell>Fecha de ingreso</TableCell>
            <TableCell>Precio</TableCell>
            <TableCell>Garantía ext</TableCell>
          </TableRow>
        </TableHead>
      </Table>
    </TableContainer>
  )
}
