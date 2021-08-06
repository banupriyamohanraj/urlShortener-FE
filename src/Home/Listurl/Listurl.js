import { useState, useEffect } from "react";
import './Listurl.css'
import {useContext} from "react"
import UserContext  from "../../UserContext/UserContext"
import { Redirect } from "react-router";
export default function Listurl() {

    let [data, setdata] = useState([])
    let isAuthorized = useContext(UserContext)
  
    useEffect( () => {
        async function fetchData() {
        let urldata = await fetch("https://urlshortener--be.herokuapp.com/url/list");
        let allurldata = await urldata.json();
       
        setdata([...allurldata]);
    }
    fetchData();
    }, [])
    if(!isAuthorized.userLoggedIn ){
        return <Redirect to='/'/>
      }
    return <>
        <div className="container-fluid " id="List__Container">
            <div className="row">
                <div className="col-lg-12 text-center mt-4 ">
                    <div className="card shadow">
                        <div className="card-body">
                        <h1>URL List</h1>
                        </div>
                   
                    </div>
                   
                </div>
            </div>
         <br/>
            <div class="row">
                {
                    data.map((obj) => {
                        let shortlink = `https://urlshortener--be.herokuapp.com/url/${obj.shortid}`;
                        return <div className="col-md-3 mt-2">
                            <div class="card  mb-3 d-flex align-items-stretch h-100" id="List__cards">
                                
                                <div class="card-body text-dark">
                        <p className="card-text"><b>ShortUrl :</b> <a href={shortlink} target='blank' rel="noreferrer">https://urlshortener--be.herokuapp.com/url/{obj.shortid}</a></p>
                                    <p class="card-text"><b>LongUrl :</b> <a href={obj.longurl} target='_blank' rel="noreferrer">{obj.longurl}</a></p>
                                </div>
                                <div class="card-footer bg-transparent ">Created on : {obj.date}</div>
                            </div>
                        </div>


                    })

                }
            </div>

        </div>


    </>
}