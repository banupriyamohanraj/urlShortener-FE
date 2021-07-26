import { useState } from "react";
import { Link } from "react-router-dom";
import { useHistory } from 'react-router-dom'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Login.css'


export default function Login() {
    

    let [email, setemail] = useState('');
    let [password, setpassword] = useState('');
    

    let history = useHistory();
    toast.configure()


    let UserSubmit = async (e) => {
        e.preventDefault()
        await fetch('https://urlshortener--be.herokuapp.com/auth/login', {
            method: "POST",
            body: JSON.stringify({
                email,
                password
            }),
            headers: {
                "content-type": "application/json"
            }
        })
            .then(res => {
                return res.json();
            }).then((data) => {
            
                let mesg = data.message
            
                toast(mesg, { position: toast.POSITION.TOP_CENTER })
               if(mesg === "Login Sucessfull"){
                history.push('/home')
               }
              
              
            })

    }

    

    return <>
        <div className='container-fluid'>
            <div className='row'>
                <div className="col-6" id="Apptitle">
               <h1>URL shortener App</h1> 
                </div>
                <div className='col-6' id="Applogin">
                    <div className="CardContainer">
                    <div class="card shadow"  >
                        <div className='card-title' style={{ "textAlign": "center","margin-top":"20px"}}>
                            <h4>LOGIN</h4>
                        </div>
                        <div class="card-body">
                            <form onSubmit={UserSubmit}>
                                <div class="form-group">
                                    <label for="exampleInputEmail1">Email</label>
                                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={email} onChange={(e) => setemail(e.target.value)} />

                                </div>
                                <div class="form-group">
                                    <label for="exampleInputPassword1">Password</label>
                                    <input type="password" class="form-control" id="exampleInputPassword1" value={password} onChange={(e) => setpassword(e.target.value)} />
                                    <Link to="/forgotpassword">Forgot password ? </Link>
                                </div>
                                <br />
                                <button type="submit" class="btn btn-dark">Login</button>

                            </form>
                            <br />
                            <div>
                                <h6>Do not have an account ? <Link to="/registration">signup</Link></h6>
                                <br />

                            </div>
                        </div>
                    </div>
                    </div>
                   

                </div>

            </div>
        </div>

    </>


}