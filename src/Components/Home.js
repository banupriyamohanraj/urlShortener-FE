import {
    BrowserRouter as HashRouter,
    Switch,
  Route} from "react-router-dom"
import Navbar from "../Home/Navbar/Navbar"
import Createurl from '../Home/Createurl';
import Listurl from "../Home/Listurl/Listurl";
import Dashboard from "../Home/Dashboard/Dashboard";
import { Redirect } from "react-router";
import { useContext } from "react";
import UserContext from "../UserContext/UserContext";



export default function Home(){
  let isAuthorized = useContext(UserContext)
if(!isAuthorized.userLoggedIn ){
  return <Redirect to='/'/>
}
 return <>
      <HashRouter basename="/#">
      <div id='wrapper'> 
     
    <Navbar></Navbar>

        <Switch>
      
       <Route path='/dashboard' component={Dashboard} exact={true}></Route>
    <Route path='/createurl' component={Createurl} exact={true}></Route>
    <Route path ='/listurl' component={Listurl} exact={true}></Route>
        </Switch>
 
        </div>
        </HashRouter>
    </>
}