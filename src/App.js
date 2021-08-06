import './App.css';
import {
  BrowserRouter as HashRouter,
  Switch,
Route} from "react-router-dom"
import Login from './Components/Login/Login';
import Registration from './Components/Registration';
import Forgotpassword from './Components/Forgotpassword';
import Resetpassword from "./Components/Resetpassword";
import ConfirmEmail from './Components/ConfirmEmail';
import Home from './Components/Home'
import {UserProvider} from "./UserContext/UserContext"




function App() {

  return <>
<HashRouter basename="/#">
<div id='wrapper'> 
<UserProvider>       
  <Switch>
  <Route path='/' component={Login} exact = {true}></Route>
    <Route path='/registration' component={Registration} exact = {true}></Route>
    <Route path ='/forgotpassword' component={Forgotpassword} exact = {true}></Route>
  <Route path = '/home'component={Home}></Route>
    <Route path="/confirm/:confirmationcode" component={ConfirmEmail} exact={true}></Route>
    <Route path ='/resetpassword/:token' component={Resetpassword} exact = {true}></Route>
  </Switch>
  </UserProvider> 
  </div>

</HashRouter>
  
 

  </>
    

}

export default App;
