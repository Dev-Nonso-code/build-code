import axios from "axios"
import React from 'react'
import {useState, useEffect} from "react"
import './Api.css'


const Api = () => {

    useEffect(() => {
        getFile()
        console.log("Hello World")
      }, [])

    const endpoint = "https://fakestoreapi.com/products"

    const [data, setdata] = useState([])
    // const Response = "json"
    const getFile =()=>{
      axios.get(endpoint)
      .then((Response)=>{
          const datas = (Response.data)
          console.log(datas);
          setdata(Response.data)
        //   alert("RAM & GOAT CHOOSE ONE")
      })
      .catch((err)=>{
          console.log(err);
      })
    }

    // const index = +1
  

  return (

    <>
    <div>
        <div><button  onClick={getFile} className="btn btn-info">All Productt</button></div>

        <div id='all' className='m-auto mx-auto bg-sucessful border border-2 border-danger'>
           { data.map((item, index)=>(
                <div id="body" className="text-light bg-dark text-center border 
            border-2 border-primary m-2" key={index}>

               {/* <img src={item.image} alt="" /> */}
                {/* <img src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg" alt="" />  */}
                {/* <span>{item.completed} </span>  */}
                <div className='text-center'>
                <div>
                <span>{item.id} </span>
                </div>

                <div className='text-info'>               
                <img className='50' src={item.image} alt="" />
                </div>

                <div>
                <button className='btn btn-primary'>{item.price} </button>
                </div>
                <div>
                {/* <span>{item.title} </span> */}
                </div>
                </div>
                </div>
            ))}
        </div>
    </div>
    </>
  )
}

export default Api