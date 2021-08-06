import { useContext,useState } from "react"
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Redirect } from "react-router";
import UserContext from "../UserContext/UserContext";


export default function Createurl() {

    let [longurl, seturl] = useState('');
    toast.configure()
   

    let urlSubmit = async (e) => {
        e.preventDefault();
        await fetch('https://urlshortener--be.herokuapp.com/url/createurl', {
            method: "POST",
            body: JSON.stringify({
                longurl
            }),
            headers: {
                "content-type": "application/json"
            }
        }).then(res => {
            return res.json();
        }).then((data) => {

            let mesg = data.message
            toast(mesg, { position: toast.POSITION.TOP_CENTER })
        })
        
    }

    let isAuthorized = useContext(UserContext)
    if(!isAuthorized.userLoggedIn ){
      return <Redirect to='/'/>
    }

    return <><div className="container-fluid">

        <div className='row'>
            <div className="col-lg-12 text-center">
                <form onSubmit={urlSubmit}>
                    <h1>URL Shortener</h1>
                    <br />
                    <div class="input-group mb-3">
                        <input type="text" class="form-control" placeholder="Enter a longurl here..." value={longurl} onChange={(e) => seturl(e.target.value)} />
                        <div class="input-group-append">
                            <button class="btn btn-outline-secondary" type="submit" id="button-addon2">Submit</button>
                        </div>

                    </div>
                    
                </form>
            </div>
        </div>


    </div></>
}