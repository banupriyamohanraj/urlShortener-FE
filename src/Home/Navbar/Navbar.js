
import { Link } from "react-router-dom";
// import { useHistory } from 'react-router-dom'
import {useContext} from "react"
import UserContext  from "../../UserContext/UserContext"
import "./Navbar.css"
import { Redirect } from "react-router";





export default function Navbar() {
    let userData = useContext(UserContext)
   
  
   let handleClick=(e)=> {
        e.preventDefault()
        userData.setuserLoggedIn(false)
        userData.setuserlist(null)
        if(!userData.userLoggedIn){
          return <Redirect to='/'/>
        }
      }

    return <>

        <nav class="navbar navbar-expand-lg sticky-top  " >

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item active">
                        <Link to="/dashboard" class="nav-link"><button type="button" className="btn btn-dark">Dashboard</button></Link>
                    </li>
                    <li class="nav-item">
                        <Link to="/createurl" class="nav-link" ><button type="button" className="btn btn-dark">Create Short URL</button></Link>
                    </li>
                    <li class="nav-item">
                        <Link to="/listurl" class="nav-link" ><button type="button" className="btn btn-dark">List all URL</button></Link>
                    </li>
                </ul>
               
                <div className="Logout__Link">
                <span style={{color:"white"}}>HI,{userData.userlist.firstname}</span>&ensp;
                   <button type="button" className="btn btn-dark" onClick={e => handleClick(e)}>Logout</button>

                </div>
            </div>
        </nav>
        <br />

       



    </>
}

