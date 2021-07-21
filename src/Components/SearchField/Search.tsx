import React from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { makeStyles } from '@material-ui/core/styles';
import { useCards } from '../../hooks/useCards'

const useStyles = makeStyles({
  option: {
    fontSize: 15,
    '& > span': {
      marginRight: 10,
      fontSize: 18,
    },
  },
  box:{
      marginBottom: '15px',
      width: '100%'
  }
});

export default function Search() {
  const classes = useStyles();
  const { cardPhone } = useCards()

  return (
    <Autocomplete
        className={classes.box}
      id="country-select-demo"

      options={cardPhone as CountryType[]}
      classes={{
        option: classes.option,
      }}
      autoHighlight
      getOptionLabel={(option) => option.name}
      renderOption={(option) => (
        <React.Fragment>
          <span>{(option.name)}</span>
          {option.numberPhone} | 
          ({option.emailId} ) | 
          ({option.adress.logradouro}, 
          {option.numberHouse}, 
          {option.adress.cep})
        </React.Fragment>
      )}
      renderInput={(params) => (
        <TextField
          {...params}
          label="Contatos Salvos"
          variant="outlined"
          inputProps={{
            ...params.inputProps,
          }}
        />
      )}
    />
  );
}

interface CountryType {
    adress: {
        bairro: string;
        cep: string;
        cidade: string;
        complemento: string;
        logradouro: string;
        numero: string;
        uf: string;
    };
    emailId: string;
    name: string;
    numberPhone: string;
    numberHouse: string | undefined;
    
}


