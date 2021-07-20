import {FormEvent} from 'react'

import { useAuth } from '../../hooks/useAuth';
import { useHistory} from 'react-router-dom';

import {Avatar, 
        Button,
        CssBaseline, 
        TextField,
        Paper,
        Grid,
        Typography
      } from "@material-ui/core"
import {useStyles} from './styles'


export default function Login() {
  const classes = useStyles();
  const history = useHistory();
  const { signInWithGoogle, user } = useAuth();
 

  async function handleLogin(event: FormEvent){
    event.preventDefault()
    if (!user) {
      await signInWithGoogle()
     }
    
    history.push('/home')
      
  }
 
  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
           
          </Avatar>
          <Typography component="h1" variant="h5">
            Agenda Telefônica
          </Typography>
          <form className={classes.form} noValidate>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Endereço de e-mail"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Senha"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              onClick={handleLogin}
            >
              Entrar
            </Button>            
          </form>
        </div>
      </Grid>
    </Grid>
  );
}