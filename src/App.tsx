
import Login from './Components/Login/index'
import { GlobalStyle } from './Styles/global'
import { Route, BrowserRouter } from 'react-router-dom'
import Home from './Pages/Home'

import {AuthContextProvider} from './services/authContext'
function App() {

  return (
    <BrowserRouter>
    <AuthContextProvider>
         <Route exact path="/" component={Login} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/home" component={Home} />
        <GlobalStyle />
      </AuthContextProvider>
    </BrowserRouter>
  );
}

export default App;
