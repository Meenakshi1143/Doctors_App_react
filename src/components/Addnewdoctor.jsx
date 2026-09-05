import React from 'react';
import { useState } from 'react';
import Home from './Home';

function Addnewdoctor() {
    let[name,setName]=useState('')
    let[age,setAge]=useState('')
    let[gender,setGender]=useState('')
    let[specialization,setSpecialization]=useState('')
    let[salary,setSalary]=useState('')
    let [newdoctor,setNewdoctor]=useState('')
    function handlesubmit(event){
        event.preventDefault()
        // console.log(name)
        // console.log(age)
        //  console.log(gender)
        //   console.log(specialization)
        //    console.log(salary)
        let formDetails = {id:Date.now(),name, age, gender, specialization, salary}
        setNewdoctor(formDetails)
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
      <Home newdoctor={newdoctor}/>
    </div>
  );
}
export default Addnewdoctor;