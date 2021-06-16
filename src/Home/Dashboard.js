import { useState, useEffect } from "react";
import DatePicker from 'react-date-picker';
import Moment from 'react-moment';
import moment from 'moment'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default function Dashboard(){

    const [value, onChange] = useState("")
    let [data, setdata] = useState('')
    let [urldata, seturldata] = useState([])
 
    toast.configure()


    useEffect(() => {

        async function fetchData() {
        let urldata = await fetch("https://urlshortener--be.herokuapp.com/url/allurlcount");
        let allurldata = await urldata.json();
        console.log(allurldata);
        setdata(allurldata)
        }
        fetchData();
    }, [])
    let date = moment(value).format('YYYY-MM-DD');

    useEffect( () => {
        
        async function fetchDataCount() {
    
            await fetch('https://urlshortener--be.herokuapp.com/url/date/count', {
                method: "POST",
                body: JSON.stringify({
                    date: date
                }),
                headers: {
                    "content-type": "application/json"
                }
            })
                .then(res => {
                    return res.json();
                }).then((data) => {
                    console.log(data)
                    let datecountdata = data.data;
                    seturldata([...datecountdata])
                    // let mesg = data.message;
                    // toast(mesg, { position: toast.POSITION.TOP_CENTER })
                })
            }
            fetchDataCount();
      
    }, [date])


   
    return <>
   <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="card">
                        <div className="card-header">
                            <h3 class="card-title">Total Number of Urls created &emsp;<span class="badge badge-dark " >{data}</span></h3>
                        </div>
                        <div className="card-body">
                            <div>
                               Please select a date... <DatePicker value={value} onChange={onChange} format="y-MM-dd" maxDate={new Date()} dayPlaceholder='dd' monthPlaceholder='mm' yearPlaceholder="yyyy"/>
                              
                            </div>
                            <hr/>
                            <div>
                                <h5>Links created on <Moment format='YYYY-MM-DD'>{value}</Moment></h5>
                             <br/>
                                {
                                    urldata.map((obj) => {
                                        let shortlink = `https://urlshortener--be.herokuapp.com/url/${obj.shortid}`;
                                        return <>
                                        <div class="list-group shadow p-3 mb-3 bg-white rounded">
                                            <a href="#" class="list-group-item list-group-item-action">
                                                <div class="d-flex w-100 justify-content-between">
                                                <h6>ShortUrl : <a href={shortlink} target='blank' rel="noreferrer">https://urlshortener--be.herokuapp.com/url/{obj.shortid}</a></h6>
                                                </div>
                                                <br/>
                                                <h6>LongUrl : <a href={obj.longurl} target='_blank' rel="noreferrer">{obj.longurl}</a></h6>
                                                
                                            </a>
                                        </div>
                                        <br/>
                                        </>
                                    })

                                    
                                }
                            </div>

                        </div>
                    </div>






                </div>

            </div>
        </div>
    
    
    
    </>
}