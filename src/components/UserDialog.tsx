// Modules
import { 
  Avatar, 
  Dialog, 
  DialogTitle, 
  List, 
  ListItem, 
  ListItemAvatar, 
  ListItemText 
} from '@mui/material'
import { blue } from '@mui/material/colors';
import { Person } from '@mui/icons-material';

type User = { alias:string, email:string }

type Props = {
  open:boolean;
  onClose: () => void;
  users: User[];
  setUsuarioActual: (_:User) => void
}

export default function UserDialog({ open, onClose, users, setUsuarioActual }:Props) {
  return (
    <Dialog onClose={onClose} open={open} fullWidth={true} maxWidth='xs'>
      <DialogTitle>Usuarios disponibles</DialogTitle>
      <UserList users={users} onClose={onClose} setUsuarioActual={setUsuarioActual}/>
    </Dialog>
  )
}

type UserListProps = {
  users:User[]
  onClose: () => void
  setUsuarioActual: (_:User) => void
}

function UserList ({ users, onClose, setUsuarioActual }:UserListProps) {
  return (
    <List>
      {users.map((item) => (
        <ListItem button key={item.alias} onClick={() => { onClose(); setUsuarioActual(item) }}>
          <ListItemAvatar>
            <Avatar sx={{ bgcolor: blue[100], color: blue[600] }}>
              <Person />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary={item.email} secondary={item.alias} />
        </ListItem>
      ))}
    </List>
  )
}