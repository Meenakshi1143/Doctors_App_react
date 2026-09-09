import React from 'react';
import { useState } from 'react';
import Home from './Home';
import axios from 'axios';
function Addnewdoctor() {
    let[name,setName]=useState('')
    let[age,setAge]=useState('')
    let[gender,setGender]=useState('')
    let[specialization,setSpecialization]=useState('')
    let[salary,setSalary]=useState('')
    let [newdoctor,setNewdoctor]=useState('')
    async function handlesubmit(event){
        event.preventDefault()
        // console.log(name)
        // console.log(age)
        //  console.log(gender)
        //   console.log(specialization)
        //    console.log(salary)
        let formDetails = {id:Date.now(),name, age, gender, specialization, salary}
        await axios.post("https://doctorapibackend.onrender.com/doctors",formDetails)
        setNewdoctor(formDetails)
    }
    async function deletedata(id){
      await axios.delete(`https://doctorapibackend.onrender.com/doctors/${id}`)
      alert('deleted')
      setNewdoctor(id)
    }
    async function updatedata(id) {
      let updated=
      {
        name:'john',
        specialization:'Muscles',
        age:25,
        gender:'male',
        salary:234343
      }
      await axios.put(`https://doctorapibackend.onrender.com/doctors/${id}`,updated)
      alert('Data Updated')
      setNewdoctor(id)
    }
  return (
    <div className="addnewdoctor">
      <h1>Add New Doctor</h1>
      <form onSubmit={handlesubmit}>
        <input type="text" value={name} onChange={(e)=>setName(e.target.value)} placeholder="Enter Doctor Name"/>
        <input type="number" value={age} onChange={(e)=>setAge(e.target.value)} placeholder="Enter Age"/>
        <select value={gender} onChange={(e)=>setGender(e.target.value)}>
          <option value="">Select Gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Other">Other</option>
        </select>
        <input type="text" value={specialization} onChange={(e)=>setSpecialization(e.target.value)} placeholder="Enter Specialization"/>
        <input type="number" value={salary} onChange={(e)=>setSalary(e.target.value)} placeholder="Enter Salary" />
        <button type="submit">Add Doctor</button>
      </form>
      {/* <Home newdoctor={newdoctor}/> */}
      <Home updatedata = {updatedata} deletedata={deletedata}newdoctor={newdoctor}/>
      {/* <Home updated={updatedata}newdoctor={newdoctor}/> */}
    </div>
  );
}
export default Addnewdoctor;