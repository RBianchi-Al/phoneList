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

const cards = [1, 2, 3];



export default function Cards() {
    const classes = useStyles();

    return (
        <>
            <Container className={classes.cardGrid} maxWidth="md" >
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
        </>
    )
}