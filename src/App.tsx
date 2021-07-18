import Login from './Components/Login/index'
import {GlobalStyle} from './Styles/global'
import {Route, BrowserRouter} from 'react-router-dom'
import Home from './Components/Header';

function App() {
  return (
    <BrowserRouter>
      <Route exact path="/" component={Login}/>
      <Route exact path="/home" component={Home}/>
      <GlobalStyle/>
   </BrowserRouter>
  );
}

export default App;
