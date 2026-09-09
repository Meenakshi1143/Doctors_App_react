import React from 'react'
import Navbar from './components/Navbar'
import './components/styles.css'
import Section from './components/Section'
import Doctorcard from './components/Doctorcard'
import Addnewdoctor from './components/Addnewdoctor'
import { Route, Routes } from 'react-router-dom'
import Doctordetails from './components/Doctordetails'

// import {useState} from 'react'
// import { useEffect } from 'react'

// function App() {
//   let count = 0
// return (
//    <div>
//     count is {count}
//     <button onClick={
//       () => {count++
//         console.log(count)
//       }
//     }>Add</button>
//     <Navbar/>
//     <Section/>
//     <div className='doctorcontainer'>
//       <Doctorcard img='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8W5tXWjKkfpSXfNDOH1RjwFDEy9cNwAoGJs7OFkKeoA&s=10' name = 'Sravanthi' gender='Female' specaliazation='Gynecologist'/>
//       {/*<Doctorcard name = 'Bhavana' gender='Female'specaliazation='Heart Specialist'/>*/}
//       <Doctorcard img='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROjmWXB-MRPD9Tm97QeSPbpVgXXI3O_IEveYoVuKKDVA&s=10' name = 'Meghana' gender='Female'specaliazation='Neuro Specialist'/>
//       <Doctorcard img='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8W5tXWjKkfpSXfNDOH1RjwFDEy9cNwAoGJs7OFkKeoA&s=10' name = 'Ankitha' gender='Female'specaliazation='Ortho Specialist'/>
//       <Doctorcard img='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROjmWXB-MRPD9Tm97QeSPbpVgXXI3O_IEveYoVuKKDVA&s=10' name = 'Vandana' gender='Female'specaliazation='Bone Specialist'/>
//     </div>
//     <Addnewdoctor/>
//     </div>
  
//   )
// }

// export default App

function App() {
  // let [count,setCount] = useState(0)
  // let [data,newData] = useState('')
  // useEffect(()=>{
  //   console.log('api calling')
  // },[data])
return (
   <div>
    {/* {data}
    //<button onClick={()=>newData('Ram')}>newData</button> 
   <button onClick={()=>{
    let a=prompt('Enter a Name')
    newData(a)
   }}>newData</button>
    count is {count}
    <button onClick={
      () => {
        setCount(count+1)
      }
    }>Add</button> 
    
    */}
    <Navbar/>
    <Routes>
      <Route path='/' element={<Section/>}/>
      <Route path='/addnewdoctor' element={<Addnewdoctor/>}/>
      <Route path='/doctordetails/:id' element={<Doctordetails/>}/>
    </Routes>
    {/* <Section/>
    <div className='doctorcontainer'>
      <Doctorcard img='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8W5tXWjKkfpSXfNDOH1RjwFDEy9cNwAoGJs7OFkKeoA&s=10' name = 'Sravanthi' gender='Female' specialization='Gynecologist'/>
      ***<Doctorcard name = 'Bhavana' gender='Female'specaliazation='Heart Specialist'/>
      <Doctorcard img='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROjmWXB-MRPD9Tm97QeSPbpVgXXI3O_IEveYoVuKKDVA&s=10' name = 'Meghana' gender='Female'specialization='Neuro Specialist'/>
      <Doctorcard img='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8W5tXWjKkfpSXfNDOH1RjwFDEy9cNwAoGJs7OFkKeoA&s=10' name = 'Ankitha' gender='Female'specialization='Ortho Specialist'/>
      <Doctorcard img='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROjmWXB-MRPD9Tm97QeSPbpVgXXI3O_IEveYoVuKKDVA&s=10' name = 'Vandana' gender='Female'specialization='Bone Specialist'/>
    </div>
    <Addnewdoctor/>
    */}
    </div> 
  
  )
}
export default App