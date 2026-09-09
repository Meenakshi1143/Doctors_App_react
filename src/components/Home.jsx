import React from 'react'

import { useEffect, useState } from 'react'
import Doctorcard from './Doctorcard';
import axios from 'axios'

function Home({newdoctor,deletedata, updatedata}) {
    let [doctors, setDoctors]=useState([])
    let[Search,setSearch]=useState('')
    let[specialization,setSpecialization]=useState('')
    // function getapidata(){
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
    // setDoctors(data)
    // }
    
    // useEffect(()=>{
    //   if(newdoctor){
    //     setDoctors(prev=>[...prev,newdoctor])
    //   }
    // },[newdoctor])
     async function getapidata(){
    let response=await axios.get("https://doctorapibackend.onrender.com/doctors")
    console.log(response)
    console.log(response.data)//actual data
    setDoctors(response.data)
}
  useEffect(()=>{
      getapidata()
  },[newdoctor])
    let filtereddoctors = doctors.filter((val)=>{
      return(val.name.toLowerCase().includes(Search.toLowerCase())&&(specialization=="" || val.specialization==specialization))
    })
    
  return (
    <div>
      <input value={Search} onChange={(e)=>setSearch(e.target.value)} type="text" placeholder='Search Doctor'/>
      <select value={specialization} onChange={(e)=>setSpecialization(e.target.value)} name="" id="">
        <option value="">specialization</option>
        <option value="Bones">Bones</option>
        <option value="Heart">Heart</option>
        <option value="Neuro">Neuro</option>
        <option value="Muscles">Muscles</option>
      </select>
      {doctors.length>0?(
    <div className='doctorcontainer'>
        {filtereddoctors.map((doctor)=>{
            return <Doctorcard
            deletedata={deletedata}
            updatedata={updatedata}
            name={doctor.name}
            specialization={doctor.specialization}
            gender={doctor.gender}
            img={doctor.img}
            key={doctor.id}
            id={doctor.id}
            />
        })}
    </div>):(<h1>Loading</h1>)}
        </div>
  )
}

export default Home