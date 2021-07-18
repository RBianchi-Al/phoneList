import { makeStyles } from '@material-ui/core/styles';
export const useStyles = makeStyles((theme) => ({
 
    button: {
      marginTop: theme.spacing(4),
   
      justifyContent: 'center',
      display: 'flex',
      width: '100%',

      
    },
    title: {
      fontSize: '25px',
      textAlign: 'center'
      
    },
    titleuser: {
      fontSize: '15px'
      
    },
    toolbar:{
        backgroundColor: "#161a1d",
        justifyContent: "space-between"
    },
    heroContent: {
      backgroundColor: theme.palette.background.paper,
      padding: theme.spacing(8, 0, 6),
    },
    heroButtons: {
      marginTop: theme.spacing(4),
    },
    cardGrid: {
      paddingTop: theme.spacing(8),
      paddingBottom: theme.spacing(8),
    },
    card: {
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
    },
    cardMedia: {
      paddingTop: '56.25%', // 16:9
    },
    cardContent: {
      flexGrow: 1,
    },
    footer: {
      backgroundColor: theme.palette.background.paper,
      padding: theme.spacing(6),
    },
    margin: {
      margin: theme.spacing(1),
    },
    container: {
      background: '#ffff',

      width:'100%',
      justifyContent: 'center',
      alignContent: 'center',
      padding: theme.typography.pxToRem(60),


      
    },
    root: {
      width: '100%',
    },
    heading: {
      fontSize: theme.typography.pxToRem(15),
      flexBasis: '33.33%',
      flexShrink: 0,
    },
    secondaryHeading: {
      fontSize: theme.typography.pxToRem(15),
      color: theme.palette.text.secondary,
    }, 
    inputCEP: {
      width: '100%',
      padding: theme.typography.pxToRem(15),
      height: 'auto',
      background: '#e7e9ee',
      border: '#d7d7d7',
    },
    form:{
      alignContent: 'center',
      justifyContent: 'center',
  

    }

  }));
  