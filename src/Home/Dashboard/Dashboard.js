import { useState, useEffect,useContext } from "react";
import DatePicker from 'react-date-picker';
import Moment from 'react-moment';
import moment from 'moment'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./Dashboard.css"
import { Redirect } from "react-router";
import UserContext from "../../UserContext/UserContext";


export default function Dashboard() {

    const [value, onChange] = useState("")
    let [data, setdata] = useState('')
    let [urldata, seturldata] = useState([])

    toast.configure()


    useEffect(() => {

        async function fetchData() {
            let urldata = await fetch("https://urlshortener--be.herokuapp.com/url/allurlcount");
            let allurldata = await urldata.json();
          
            setdata(allurldata)
        }
        fetchData();
    }, [])
    let date = moment(value).format('YYYY-MM-DD');

    useEffect(() => {

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
                  
                    let datecountdata = data.data;
                    seturldata([...datecountdata])

                })
        }
        fetchDataCount();

    }, [date])

    let isAuthorized = useContext(UserContext)
    if(!isAuthorized.userLoggedIn ){
      return <Redirect to='/'/>
    }


    return <>
    <div className="titleContainer">
    <div class="card shadow" >
            <div class="card-body">
               <h2>Total URLs {data} </h2> 
               <br/>
               <p>Please select a date...  <DatePicker value={value} onChange={onChange} format="dd-MM-y" maxDate={new Date()} dayPlaceholder='dd' monthPlaceholder='mm' yearPlaceholder="yyyy"/></p>
            
            </div>
        </div>
    </div>
      
        <br />
    
        <div className="container-fluid">
        
            <table className="table table-hover table-sm" style={{
                "table-layout": "fixed",
                "width": "100%"
            }}>
                <thead class="thead">
                    <tr>
                     
                        <th>Created On</th>
                        <th scope="col">ShortUrl</th>
                        <th scope="col">LongUrl</th>
                      
                       
                    </tr>
                </thead>
                <tbody>


                    {

                        urldata.map((obj) => {
                            let shortlink = `https://urlshortener--be.herokuapp.com/url/${obj.shortid}`;
                         
                            return <tr>
                                
                                <td><Moment format='DD-MM-YYYY'>{obj.date}</Moment></td>
                                <td><a href={shortlink} target='blank' rel="noreferrer">https://urlshortener--be.herokuapp.com/url/{obj.shortid}</a></td>
                                <td style={{
                                    "white-space": "-o-pre-wrap",
                                    "word-wrap": "break-word ",
                                    " white-space": "pre-wrap -moz-pre-wrap -pre-wrap"
                                }}><a href={obj.longurl} target='_blank' rel="noreferrer">{obj.longurl}</a></td>
                               
                          

                            </tr>
                        })
                    }
                </tbody>
            </table>
        </div>








    </>
}


// {
//     urldata.map((obj) => {
//         let shortlink = `https://urlshortener--be.herokuapp.com/url/${obj.shortid}`;
//         return <> <h5>Link created on <Moment format='DD-MM-YYYY'>{obj.date}</Moment></h5>
//         <div class="list-group shadow p-3 mb-3 bg-white rounded">
//             <div class="list-group-item list-group-item-action">
//                 <div class="d-flex w-100 justify-content-between">
//                 <h6>ShortUrl : <a href={shortlink} target='blank' rel="noreferrer">https://urlshortener--be.herokuapp.com/url/{obj.shortid}</a></h6>
//                 </div>
//                 <br/>
//                 <h6>LongUrl : <a href={obj.longurl} target='_blank' rel="noreferrer">{obj.longurl}</a></h6>

//             </div>
//         </div>
//         <br/>
//         </>
//     })


// }