import { AuthContextProvider } from './services/authContext'
import { GlobalStyle } from './Styles/global'
import { Route, BrowserRouter, Switch,  } from 'react-router-dom'

import Login from './Components/Login/index'
import Home from './Pages/Home'
import RegisterPhones from './Pages/Register'
import PrivateRoute from './privateRoutes'
import { Modal } from './Components/Modal/Moda'



function App() {
  return (
    <BrowserRouter>
      <AuthContextProvider>
        <Switch>
          <PrivateRoute exact path="/home" component={Home} />
          <Route exact path="/" component={Login} />
          <Route exact path="/register" component={RegisterPhones} />
          <Route path="/home" component={Home} />
          <Route path="/phoneUser" component={Modal} />
          <GlobalStyle />
        </Switch>
      </AuthContextProvider>
    </BrowserRouter>
  );
}

export default App;
