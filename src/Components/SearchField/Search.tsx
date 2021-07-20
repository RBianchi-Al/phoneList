import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';

import {useStyles} from './styles'
import { useState } from 'react';
import {useCards} from '../../hooks/useCards'

export default function Search( ) {
    const classes = useStyles();
    const {cardPhone} = useCards()
    const [busca, setBusca] = useState('')
    
    const nameFilter = cardPhone.map((user) => {
        return user.name;
    })

    const dados = nameFilter.filter((nameFilter) => nameFilter.startsWith(busca))
    
  
  
    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar className={classes.toolbar}>
                    <div className={classes.search}>
                        <div className={classes.searchIcon}>
                            <SearchIcon />
                        </div>
                        <InputBase
                            placeholder="Search…"
                            classes={{
                                root: classes.inputRoot,
                                input: classes.inputInput,
                            }}
                            inputProps={{ 'aria-label': 'search' }}
                            onChange={ev => setBusca(ev.target.value)}
                            value={busca}
                        />
                        
                    </div>
                </Toolbar>
               
            </AppBar>
        </div>
    );
}
