{/*import React from 'react'

function Doctorcard(props) {
  return (
    <div className='card'>
        <div><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROjmWXB-MRPD9Tm97QeSPbpVgXXI3O_IEveYoVuKKDVA&s=10" /></div>
        <h1>{props.name}</h1>
        <p>{props.gender}</p>
        <p>{props.specaliazation}</p>
        <button>View Details</button>
    </div>
  )
}

export default Doctorcard
*/}

import React from 'react'
import { useNavigate } from 'react-router-dom'
function Doctorcard({img,name,gender, specialization, id, deletedata, updatedata}) {
  let navigate=useNavigate()
  return (
    <div className='card'>
        <div><img src={img} alt={name} /></div>
        <h1>{name}</h1>
        <p>{gender}</p>
        <p>{specialization}</p>
        <button onClick={()=>navigate(`/doctordetails/${id}`)}>View Details</button>
        <button onClick={()=>deletedata(id)}>Delete Doctor</button>
        <button onClick={()=>updatedata(id)}>Update</button>
    </div>
  )
}

export default Doctorcard
