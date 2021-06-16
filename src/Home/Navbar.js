
import { Link } from "react-router-dom";
import { useHistory } from 'react-router-dom'




export default function Navbar() {

    let history = useHistory();
    
    // console.log(urldata)

    return <>

        <nav class="navbar navbar-expand-lg sticky-top navbar-dark bg-dark" >

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item active">
                        <Link to="/dashboard" class="nav-link">Dashboard</Link>
                    </li>
                    <li class="nav-item">
                        <Link to="/createurl" class="nav-link" >Create Short URL</Link>
                    </li>
                    <li class="nav-item">
                        <Link to="/listurl" class="nav-link" >List all URL</Link>
                    </li>
                </ul>
                <button type='submit' id='logout' className='btn-light' onClick={()=>{ history.push('/')  }}>logout</button>
            </div>
        </nav>
        <br />

        



    </>
}

