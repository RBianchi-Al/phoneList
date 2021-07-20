import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';

// css
import clsx from 'clsx';
import { useTheme } from '@material-ui/core/styles';
import {
  Drawer,
  CssBaseline,
  AppBar,
  Toolbar,
  List,
  Typography,
  Divider,
  IconButton,
  ListItem,
  Avatar,
  ListItemText
} from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import PhoneIcon from '@material-ui/icons/Phone';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { useStyles } from './styles';



export default function Header() {
  const classes = useStyles();
  const theme = useTheme();

  const [open, setOpen] = useState(false);
  const history = useHistory();
  const { user, logOut } = useAuth()

  // sair
  function signOutUser() {
    logOut()
    history.push('/')

  }


  function handleRegister() {
    history.push('/register')
  }

  function handlePhones() {
    history.push(`/home`)
  }


  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
          <Avatar className={classes.icon} src={user?.avatar} />
          <Typography className={classes.title} color="inherit" noWrap>
            Bem vind@, <br />
            <strong className={classes.titleuser}>{user?.name}</strong>
          </Typography>

        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </div>
        <Divider />
        <List >
          <ListItem className={classes.menuButton}>
            <PhoneIcon />
            <ListItemText
              onClick={handleRegister}
            >Cadastrar
            </ListItemText>
          </ListItem>
          <ListItem className={classes.menuButton}>
            <InboxIcon />
            <ListItemText onClick={handlePhones}>
              Agenda
            </ListItemText>
          </ListItem>
        </List>
        <Divider />
        <List>
          <ListItem onClick={signOutUser} className={classes.menuButton}>
            <ExitToAppIcon />
            <ListItemText>Sair</ListItemText>
          </ListItem>
        </List>
      </Drawer>
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}
      >
        <div className={classes.drawerHeader} />


      </main>
    </div>
  );
}
