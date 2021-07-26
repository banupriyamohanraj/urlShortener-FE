
import { Link } from "react-router-dom";
import { useHistory } from 'react-router-dom'
import "./Navbar.css"




export default function Navbar() {

    let history = useHistory();
    // console.log(urldata)
   let handleClick=(e)=> {
        e.preventDefault()
        console.log(e.target)
        history.push("/")
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
                   <button type="button" className="btn btn-dark" onClick={e => handleClick(e)}>Logout</button>

                </div>
            </div>
        </nav>
        <br />

        



    </>
}

