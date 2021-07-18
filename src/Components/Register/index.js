import { Formik, Field, Form } from 'formik';
import {
  Container,
  Typography,
  Grid,
  Button,
  TextField

} from '@material-ui/core'
import { useStyles } from './styles'

export default function Register() {
  function onSubmit(values, actions) {
    console.log('SUBMIT', values);
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
      });
  }

  const classes = useStyles();
  return (
    <Formik onSubmit={onSubmit}
      validateOnMount
      initialValues={{
        cep: '',
        logradouro: '',
        numero: '',
        complemento: '',
        bairro: '',
        cidade: '',
        uf: '',
      }}
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
                  type="number"
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
                className={classes.inputCEP} />
              </Grid>
              <Grid item xs={12}>
                <Button type="submit" disabled={!isValid} variant="contained" className={classes.button} color="secondary" >Cadastrar</Button>
              </Grid>
            </Grid>
         
          </Container>

        </Form>
      )}
    />
  )
}