import {useState} from 'react';
import {useHistory} from 'react-router-dom'
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default function Registration(){
    
let[username,setusername] = useState('')
let[firstname,setfirstname]=useState('')
let[lastname,setlastname]=useState('')
let[email,setemail]=useState('')
let[password,setpassword]=useState('')


let history = useHistory(); 
toast.configure()
let status = "pending"
let UserSubmit = async (e) => {
    e.preventDefault()
     await fetch("https://urlshortener--be.herokuapp.com/auth/register", {
        method: "POST",
        body: JSON.stringify({
            username,
            firstname,
            lastname,
            email,
            password,
            status
        }),
        headers: {
            "content-type": "application/json"
        }
    }).then(res => {
        return res.json();

    }).then((data) => {
 
      let mesg = data.message
        toast(mesg,{position: toast.POSITION.TOP_CENTER})
    history.push('/')
    }).catch(err => {
        // Do something for an error here
        console.log("Error Reading data " + err);
    });
}


    return <>
 <div className='container'>
            <div className='row'>
                <div className='col-md-7' style={{"padding-left":"50px","margin-left":"200px","marginTop":"0px"}}>
                    <div class="card" style={{"padding-top":"50px","border-radius": "3%"}}>
                        <div className='card-title' style={{"textAlign":"center"}}>
                            <h2>SIGN UP</h2>
                        </div>
                        <div class="card-body">
                            <form onSubmit={UserSubmit}>
                            <div class="form-group">
                                    <label for="username">username</label>
                                    <input type="username" class="form-control" id="username" value ={username} onChange={(e) => setusername(e.target.value)}placeholder="Enter a Unique username" />
                                    
                                </div>
                                <div class="form-group">
                                    <label for="firstname">Firstname</label>
                                    <input type="firstname" class="form-control" id="firstname"value ={firstname} onChange={(e) => setfirstname(e.target.value)} />
                                    
                                </div>
                                <div class="form-group">
                                    <label for="lastname">Lastname</label>
                                    <input type="lastname" class="form-control" id="lastname" value ={lastname} onChange={(e) => setlastname(e.target.value)}/>
                                    
                                </div>
                                <div class="form-group">
                                    <label for="exampleInputEmail1">Email address</label>
                                    <input type="email" class="form-control" id="exampleInputEmail1" value ={email} onChange={(e) => setemail(e.target.value)} aria-describedby="emailHelp" />
                                    
                                </div>
                                <div class="form-group">
                                    <label for="exampleInputPassword1">Password</label>
                                    <input type="password" class="form-control" id="exampleInputPassword1" value ={password} onChange={(e) => setpassword(e.target.value)}/>
                                </div>
                                <button type="submit" class="btn btn-dark">sign Up</button>
        
                            </form>
                            
                        </div>
                    </div>

                </div>

            </div>
        </div>

    </>
    
    
    }