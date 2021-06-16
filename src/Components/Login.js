import { useState } from "react";
import { Link } from "react-router-dom";
import { useHistory } from 'react-router-dom'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


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
                console.log(data)
            
                console.log(data.token)
            
                



                let mesg = data.message
                console.log(mesg)
                toast(mesg, { position: toast.POSITION.TOP_CENTER })
               if(mesg === "Login Sucessfull"){
                history.push('/home')
               }
              
              
            })

    }

    

    return <>
        <div className='container'>
            <div className='row'>
                <div className='col-md-7' style={{ "padding-left": "50px", "margin-left": "200px", "margin-top": "10px" }}>
                    <div class="card" style={{ "padding": "20px", "border-radius": "3%" ,"marginTop":"50px"}} >
                        <div className='card-title' style={{ "textAlign": "center" }}>
                            <img src="https://thumbs.dreamstime.com/b/user-icon-member-login-vector-isolated-white-background-form-155134186.jpg" alt ="login member img" width="70" height="70"></img>
                            <h2>LOGIN</h2>
                        </div>
                        <div class="card-body">
                            <form onSubmit={UserSubmit}>
                                <div class="form-group">
                                    <label for="exampleInputEmail1">Email address</label>
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
                                <h5>Do not have an account ? <Link to="/registration">signup</Link></h5>
                                <br />

                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </div>

    </>


}