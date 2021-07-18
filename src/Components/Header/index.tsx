import { useContext } from 'react';
import {
  AppBar,
  Card,
  CardContent,
  CardMedia,
  Toolbar,
  Container,
  Typography,
  Grid,
  CssBaseline,
  ListItem,
  ListItemText,
  ListItemIcon,
  Button,
  Avatar,
  ImageList
} from '@material-ui/core';
import { useStyles } from './styles';
import PhoneIcon from '@material-ui/icons/Phone';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import HomeIcon from '@material-ui/icons/Home';
import { useHistory } from 'react-router-dom'
import { AuthContext } from '../../App';


const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

export default function Home() {
  const classes = useStyles();
  const history = useHistory();
  const { user } = useContext(AuthContext);
 
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
          <Button
            variant="outlined"
            color="secondary"
            onClick={handleLogin}
            className={classes.button}>
            Logout
          </Button>
        </Toolbar>
      </AppBar>
      <main>

        <Container className={classes.cardGrid} maxWidth="md">
          <Grid container spacing={4}>
            {cards.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image="https://source.unsplash.com/random"
                    title="Image title"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      José
                    </Typography>
                    <ListItem>
                      <ListItemIcon>
                        <PhoneIcon />
                      </ListItemIcon>
                      <ListItemText>16-99789587</ListItemText>
                    </ListItem>
                    <ListItem>
                      <ListItemIcon>
                        <HomeIcon />
                      </ListItemIcon>
                      <ListItemText>14487-985, Rua das Alamedas, 5545</ListItemText>
                    </ListItem>
                    <ListItem>
                      <ListItemIcon>
                        <MailOutlineIcon />
                      </ListItemIcon>
                      <ListItemText>j@gmail.com</ListItemText>
                    </ListItem>

                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
    </>
  );
}