
/* eslint-disable no-use-before-define */
import React from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { makeStyles } from '@material-ui/core/styles';
import { useCards } from '../../hooks/useCards'

// ISO 3166-1 alpha-2
// ⚠️ No support for IE 11
function countryToFlag(isoCode: string) {
  return typeof String.fromCodePoint !== 'undefined'
    ? isoCode
        .toUpperCase()
        .replace(/./g, (char) => String.fromCodePoint(char.charCodeAt(0) + 127397))
    : isoCode;
}

const useStyles = makeStyles({
  option: {
    fontSize: 15,
    '& > span': {
      marginRight: 10,
      fontSize: 18,
    },
  },
});

export default function Search() {
  const classes = useStyles();
  const { cardPhone } = useCards()

  return (
    <Autocomplete
      id="country-select-demo"
      style={{ width: 300 }}
      options={cardPhone as CountryType[]}
      classes={{
        option: classes.option,
      }}
      autoHighlight
      getOptionLabel={(option) => option.name}
      renderOption={(option) => (
        <React.Fragment>
          <span>{countryToFlag(option.name)}</span>
          {option.numberPhone} ({option.emailId})

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
    
}


// import TextField from '@material-ui/core/TextField';
// import Autocomplete from '@material-ui/lab/Autocomplete';
// import { useState} from 'react';
// import { useCards } from '../../hooks/useCards'


// export default function Search() {
//     const { cardPhone } = useCards()
    
//         const options = cardPhone.map((option) => {
//           const firstLetter = option.name[0].toUpperCase();
         
//           return {
//             firstLetter: /[0-9]/.test(firstLetter) ? '0-9' : firstLetter,
//             ...option,
//           };
//         });
    

//     return (
//         <Autocomplete
            
//             id="combo-box-demo"
//             // options={cardPhone}
//             options={options.sort((a, b) => -b.firstLetter.localeCompare(a.firstLetter))}
//             groupBy={(option) => option.firstLetter}
//             getOptionLabel={(option) => option.name}
            
//             // getLimitTagsText={(option) => {option.numberPhone; option.name; option.adress }}
//             // getOptionLabel={(option) => option.name}
            
//             // getOptionSelected={(option) => {option.numberPhone; option.name; option.adress} }
//             // getOptionLabel={(option) => {option.numberPhone; option.name; option.adress} }
//             style={{ width: 300 }}
//             renderInput={(params) => 
//             <TextField 
//             {...params} 
//             label="Contatos salvos" variant="outlined" />}
//         />

//     );
// }

