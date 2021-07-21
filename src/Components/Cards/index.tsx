import { useAuth } from '../../hooks/useAuth';
import { useCards } from '../../hooks/useCards'
import Search from '../SearchField/Search'
// css
import { useStyles } from './styles';
import {
    Card,
    CardContent,
    CardMedia,
    Container,
    ListItemText,
    ListItemIcon,
    Grid,
    ListItem,
    Typography,

} from '@material-ui/core'

// icons
import PhoneIcon from '@material-ui/icons/Phone';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import HomeIcon from '@material-ui/icons/Home';

// import { database } from '../../services/firebase';


export default function Cards() {
    const classes = useStyles();
    const { user } = useAuth()
    const { cardPhone } = useCards()
  
    
    return (
        <>

            <Container className={classes.cardGrid} maxWidth="md" >
                <Search />
                <div>
                    <h1>{cardPhone.length > 0 && <span> Olá {user?.name}, você tem {cardPhone.length} contatos o/ </span>}</h1>
                    <Grid  container spacing={1}>
                        {cardPhone.map((card) => (
                            <Grid item key={card.id} xs={12} md={4} >
                                <Card className={classes.card}>
                                    <CardMedia
                                        className={classes.cardMedia}
                                        image="https://source.unsplash.com/random"
                                        title="Image title"
                                    />
                                    <CardContent className={classes.cardContent}>
                                        <Typography gutterBottom variant="h5" component="h2">
                                            {card.name}
                                        </Typography>
                                        <ListItem>
                                            <ListItemIcon>
                                                <PhoneIcon />
                                            </ListItemIcon>
                                            <ListItemText>{card.numberPhone} </ListItemText>
                                        </ListItem>
                                        <ListItem>
                                            <ListItemIcon>
                                                <HomeIcon />
                                            </ListItemIcon>
                                            <ListItemText>{`
                                        R.: ${card.adress?.logradouro}
                                        R.: ${card.numberHouse}
                                        Bairro: ${card.adress?.bairro}
                                        Cidade: ${card.adress?.cidade}
                                        UF: ${card.adress?.uf}
                                        CEP: ${card.adress?.cep}
                                        `} </ListItemText>
                                        </ListItem>
                                        <ListItem>
                                            <ListItemIcon>
                                                <MailOutlineIcon />
                                            </ListItemIcon>
                                            <ListItemText>{card.emailId} </ListItemText>
                                        </ListItem>
                                        {/* <Button variant="contained" color="secondary" className={classes.button}>Excluir</Button> */}
                                    </CardContent>
                                </Card>
                            </Grid>

                        ))}
                    </Grid>

                </div>

            </Container>

        </>
    )
}