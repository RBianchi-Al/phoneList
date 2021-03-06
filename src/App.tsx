import { AuthContextProvider } from './services/authContext'
import { GlobalStyle } from './Styles/global'
import { Route, BrowserRouter, Switch } from 'react-router-dom'

import Login from './Components/Login/index'
import Home from './Pages/Home'
import RegisterPhones from './Pages/Register'


function App() {
  return (
    <BrowserRouter>
      <AuthContextProvider>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/register" component={RegisterPhones} />
          <Route exact path="/home" component={Home} />
          <GlobalStyle />
        </Switch>
      </AuthContextProvider>
    </BrowserRouter>
  );
}

export default App;
