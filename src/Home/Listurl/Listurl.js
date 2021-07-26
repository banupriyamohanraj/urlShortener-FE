import { useState, useEffect } from "react";
import './Listurl.css'
export default function Listurl() {

    let [data, setdata] = useState([])

    useEffect( () => {
        async function fetchData() {
        let urldata = await fetch("https://urlshortener--be.herokuapp.com/url/list");
        let allurldata = await urldata.json();
        console.log(allurldata);
        setdata([...allurldata]);
    }
    fetchData();
    }, [])

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
            <hr />
            <div class="row">
                {
                    data.map((obj) => {
                        let shortlink = `https://urlshortener--be.herokuapp.com/url/${obj.shortid}`;
                        return <div className="col-md-3 mt-2">
                            <div class="card border-primary mb-3 d-flex align-items-stretch h-100" id="List__cards">
                                <div class="card-header bg-transparent border-primary">
                                    <p class="card-title"><b>ShortUrl :</b> <a href={shortlink} target='blank' rel="noreferrer">https://urlshortener--be.herokuapp.com/url/{obj.shortid}</a></p>
                                </div>
                                <div class="card-body text-dark">

                                    <p class="card-text"><b>LongUrl :</b> <a href={obj.longurl} target='_blank' rel="noreferrer">{obj.longurl}</a></p>
                                </div>
                                <div class="card-footer bg-transparent border-primary">Created on : {obj.date}</div>
                            </div>
                        </div>


                    })

                }
            </div>

        </div>


    </>
}