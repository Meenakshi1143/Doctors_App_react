import React from 'react'
import { useState, useEffect } from 'react'
import {useParams} from 'react-router-dom'

import axios from 'axios'
function Doctordetails() {
    let {id}=useParams()
    let [doctor,setDoctors] = useState([])
   
    async function getapidata(){
    //     let data = [
    //   {
    //     id: 1,
    //     name: "Teja",
    //     age: 26,
    //     gender: "Male",
    //     specialization: "Muscles",
    //     salary: 7000000,
    //    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_g7ZR_fwdAiWcOnTp0rlU0QeaSV61BmQthqSkOts2RPaPmDjskGXt7Io&s",
    //     },
    //     {
    //     id: 2,
    //     name: "Divya",
    //     age: 27,
    //     gender: "Female",
    //     specialization: "Neuro",
    //     salary: 3000000,
    //     img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRg98-52xcgPqmTNcm4ZFKlkHOKODgkofbiXkyxF71cDA&s=10"
    //   },

    //   {
    //     id: 3,
    //     name: "Anu",
    //     age: 25,
    //     gender: "Female",
    //     specialization: "Heart",
    //     salary: 5000000,
    //     img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBOd4ZtCAAD4p6G8JP8pwvUQGTFByY07KPW2svretfYQ&s=10"
    //   },
    //  {
    //     id: 4,
    //     name: "Sam",
    //     age: 26,
    //     gender: "Male",
    //     specialization: "Bones",
    //     salary: 4000000,
    //     img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQW0cdC3V-eVhbFnKj3Ok0H0__yGyDC_6213PovhT0llQ&s=10",
    //   },
    // ];
    let response=await axios.get("https://doctorapibackend.onrender.com/doctors")
    let finaldata=response.data.find((val)=>id==val.id)
    setDoctors(finaldata)
    }
    
     useEffect(()=>{
        getapidata()
     },[])
  return (
    //<div>Doctor Details: {id}</div>
    <div>
    {doctor && (
        <div>
        <h1>{doctor.id}</h1>
        <h1>{doctor.name}</h1>
        <h1>{doctor.img}</h1>
        <h1>{doctor.gender}</h1>
        <h1>{doctor.salary}</h1>
        </div>
    )}
    </div>
  )
}

export default Doctordetails