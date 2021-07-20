import {useState} from 'react'
import { useHistory } from 'react-router-dom';
import { Formik, Field, Form } from 'formik';
import {
  Container,
  Typography,
  Grid,
  Button,
  TextField

} from '@material-ui/core'
import { useStyles } from './styles'
import { useAuth } from '../../hooks/useAuth';
import {database} from '../../services/firebase'



export default function Register() {
  const history = useHistory();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [number, setNumber] = useState('');
  const {user} = useAuth()

  const initialValues = {
    cep: '',
    logradouro: '',
    numero: '',
    complemento: '',
    bairro: '',
    cidade: ''
  }
async  function onSubmit(values, actions) {
    // console.log('SUBMIT', values);

  
    if(name.trim() === ''){
        return
      }
      if(email.trim() === ''){
        return
      }
      if(phone.trim() === ''){
        return
      }
      if(number.trim() === ''){
        return
      }
  
      const phoneRef = database.ref('phone');
      const firebasePhone = await phoneRef.push({
        userId: user?.id,
        name: name,
        numberPhone: phone,
        numberHouse: number,
        emailId: email,
        adress: values
      });

      setName('')
      setNumber('')
      setEmail('')
      setPhone('')

      history.push('/home')
      console.log(firebasePhone)

  }

  function onBlurCep(ev, setFieldValue) {
    const { value } = ev.target;

    const cep = value?.replace(/[^0-9]/g, '');

    if (cep?.length !== 8) {
      return;
    }

    fetch(`https://viacep.com.br/ws/${cep}/json/`)
      .then((res) => res.json())
      .then((data) => {
        setFieldValue('logradouro', data.logradouro);
        setFieldValue('bairro', data.bairro);
        setFieldValue('cidade', data.localidade);
        setFieldValue('uf', data.uf);
        setFieldValue('cep', data.cep);

      });
  }

  const classes = useStyles();
  return (
    <Formik onSubmit={onSubmit}
      validateOnMount
      initialValues={initialValues}
      render={({ isValid, setFieldValue }) => (
        <Form className={classes.form}>
          
          <Container className={classes.container} maxWidth="sm">
            <Typography className={classes.title} color="textPrimary" gutterBottom>
              Agenda Telefônica!
            </Typography>
              <Grid item xs={12} sm={12}>
                <TextField
                  required
                  id="nameUser"
                  label="Nome Completo"
                  fullWidth
                  autoComplete="family-name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  id="phone"
                  name="fone"
                  label="Telefone"
                  fullWidth
                  autoComplete="shipping address-line1"
                  type="text"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  id="email"
                  name="email"
                  label="Email"
                  type="Email"
                  fullWidth
                  autoComplete="shipping address-line2"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Grid>
              <Grid container spacing={1}>
              <Grid item xs={12} sm={12}>
                <TextField 
                name="cep" 
                type="text" 
                required
                label="CEP"
                onBlur={(ev) => onBlurCep(ev, setFieldValue)} />
              </Grid>
              <Grid item xs={12} sm={12}>
                <Field name="logradouro" type="text" className={classes.inputCEP}/>
              </Grid>
              <Grid item xs={12} sm={12}>
                <Field name="bairro" type="text" className={classes.inputCEP} />
              </Grid>
              <Grid item xs={12} sm={12}>
                <Field name="cidade" type="text" className={classes.inputCEP}/>
              </Grid>
              <Grid item xs={12} sm={12}>

                <TextField 

                placeholder="Número"
                name="numero" 
                type="text" 
                className={classes.inputCEP} 
                value={number}
                onChange={(e) => setNumber(e.target.value)}/>
              </Grid>
              <Grid item xs={12}>
                <Button 
                type="submit" 
                disabled={!isValid} 
                variant="contained" 
                className={classes.button} 
                color="secondary" >Cadastrar</Button>
              </Grid>
            </Grid>
         
          </Container>

        </Form>
      )}
    />
  )
}