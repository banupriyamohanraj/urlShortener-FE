import {
    BrowserRouter as Router,
    Switch,
  Route} from "react-router-dom"
import Navbar from "../Home/Navbar/Navbar"
import Createurl from '../Home/Createurl';
import Listurl from "../Home/Listurl/Listurl";
import Dashboard from "../Home/Dashboard/Dashboard";




export default function Home(){
    return <>
    <Router>
    <Navbar></Navbar>
    
        <Switch>
      
       <Route path='/dashboard' component={Dashboard} exact={true}></Route>
    <Route path='/createurl' component={Createurl} exact={true}></Route>
    <Route path ='/listurl' component={Listurl} exact={true}></Route>
        </Switch>
    </Router>
    </>
}