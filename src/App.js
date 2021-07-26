import './App.css';
import {
  BrowserRouter as Router,
  Switch,
Route} from "react-router-dom"
import Login from './Components/Login/Login';
import Registration from './Components/Registration';
import Forgotpassword from './Components/Forgotpassword';
import Resetpassword from "./Components/Resetpassword";
import ConfirmEmail from './Components/ConfirmEmail';
import Home from './Components/Home'



function App() {
  return <>
<Router>
  <div id='wrapper'>         
  <Switch>
  <Route path='/' component={Login} exact = {true}></Route>
    <Route path='/registration' component={Registration} exact = {true}></Route>
    <Route path ='/forgotpassword' component={Forgotpassword} exact = {true}></Route>
    <Route path = '/home'component={Home}></Route>
    <Route path="/confirm/:confirmationcode" component={ConfirmEmail} exact={true}></Route>
    <Route path ='/resetpassword/:token' component={Resetpassword} exact = {true}></Route>
  </Switch>
  </div>
  </Router>

  </>
    

}

export default App;
