import { useEffect} from "react"
import {useHistory} from 'react-router-dom'

export default function ConfirmEmail(props){
    let history = useHistory();
    

  
    let confirmationcode = props.match.params.confirmationcode
    let status = "Activated"

    useEffect(()=>{
        confirm()
    })

   const confirm =()=>{
    fetch("https://urlshortener--be.herokuapp.com/auth/confirm",{
        method: "PUT",
        body: JSON.stringify({
            status,confirmationcode
        }),
        headers: {
            "content-type": "application/json"
        }
    }).then(res=>{
        return res.json();
    }).then((data)=>{
    
        history.push('/')
    
    })
   }
    return <><h3>Your Email has been successfully activated !!! <strong>Redirecting to login Page...</strong></h3></>
}



