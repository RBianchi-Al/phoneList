import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { database } from '../../services/firebase'
// css
import { useStyles } from './styles';

// designer
import {
    Card,
    CardContent,
    CardMedia,
    Container,
    ListItemText,
    ListItemIcon,
    Grid,
    ListItem,
    Typography
} from '@material-ui/core'

// icons
import PhoneIcon from '@material-ui/icons/Phone';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import HomeIcon from '@material-ui/icons/Home';
import { useAuth } from '../../hooks/useAuth';


const cards = [1, 2, 3];

type FirebasePhone = Record<string, {
    adress: {
        bairro: string;
        cep: string;
        cidade: string;
        complemento?: string;
        logradouro?: string;
        numero: string;
        uf?: string;
    };
    emailId: string;
    name: string;
    numberPhone: string;
    userId: string;

    
}>

type CardPhone = {
    id: string;
    adress: {
        bairro: string;
        cep: string;
        cidade: string;
        complemento?: string;
        logradouro?: string;
        numero: string;
        uf?: string;
    };
    emailId: string;
    name: string;
    numberPhone: string;
    userId: string;
    
}


type PhotosParams = {
    id: string;
}

export default function Cards() {

    const classes = useStyles();
    const {user} = useAuth()
    const params = useParams<PhotosParams>()
    const [cardPhone, setCardPhone] = useState<CardPhone[]>([])
    const phoneId = params.id
    
    useEffect(() => {

        const phonesDb = database.ref('phone')

        
        
        
        phonesDb.on('value', phones => {
            const databasePhone = phones.val();
            const firebasePhone: FirebasePhone = databasePhone ?? {};

            console.log(databasePhone)

            const parsePhone = Object.entries(firebasePhone).map(
                ([key, value]) => {
                return {
                    id: key,
                    name: value.name,
                    numberPhone: value.numberPhone,
                    userId: value.userId,
                    adress: value.adress,
                    emailId: value.emailId, 
                }
            })

            setCardPhone(parsePhone)
            
            
        })
    }, [])


    return (
        <>
            <Container className={classes.cardGrid} maxWidth="md" >
                <h1>{cardPhone.length > 0 && <span> Olá {user?.name}, você tem {cardPhone.length} contatos o/ </span> }</h1>
                <Grid container spacing={1}>
                    {cards.map((card) => (
                        <Grid item key={card} xs={4} sm={9} md={4}>
                            <Card className={classes.card}>
                                <CardMedia
                                    className={classes.cardMedia}
                                    image="https://source.unsplash.com/random"
                                    title="Image title"
                                />
                                <CardContent className={classes.cardContent}>
                                    <Typography gutterBottom variant="h5" component="h2">

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
                {JSON.stringify(cardPhone)}
            </Container>
        </>
    )
}