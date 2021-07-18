import { useHistory } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';

import {
  AppBar,  
  Toolbar,
  Typography,
  CssBaseline,
  ListItem,
  Button,
  Avatar,
} from '@material-ui/core';
import { useStyles } from './styles';



export default function Header() {
  const classes = useStyles();
  const history = useHistory();
  const { user } = useAuth()
 
  function handleLogin() {
    history.push('/login')
  }


  return (
    <>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar className={classes.toolbar}>
        <ListItem>
        <Avatar className={classes.icon} src={user?.avatar}/>
          <Typography className={classes.title} color="inherit" noWrap>
            Bem vind@, <br/>
            <strong className={classes.titleuser}>{user?.name}</strong> 
          </Typography>
        </ListItem>
        {/* <Button
            variant="outlined"
            color="primary"
            onClick={handleLogin}
            className={classes.button}>
            Cadastrar
          </Button> */}
          
        <Button
            variant="outlined"
            color="secondary"
            onClick={handleLogin}
            className={classes.button}>
            Sair
          </Button>
        
        </Toolbar>
      </AppBar>
    </>
  );
  }