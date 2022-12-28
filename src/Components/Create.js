import { margin, style } from '@mui/system';
import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom';

const Create = () => {
    
    const [name,setName] = useState("")
    const [email,setEmail] = useState("")
    const history = useNavigate()

    const header = { "Access-Control-Allow-Origin": "*" }
     
    const handleSubmit = (e)=>{
      e.preventDefault();
      console.log("clicked");
      axios.post('https://63a88204f4962215b583c348.mockapi.io/nasir2/crud-assignment',{
        name: name,
        email: email,
        header,
      

      })
      .then(()=>{
        history("/read");
      })
    }
    const style= {marginTop: "70px"}

  return<>
  <div style={ style}
   className='d-flex justify-content-between '>
  <h2>Create</h2>
  <Link to ="/read">
        <button className='btn btn-primary'>Show data</button>
        </Link>
        </div>
   <form>
   <div className="d-flex justify-content-between m-5 ">
    <label  className="form-label">Name</label>
    <input type="text"  className="form-control"
       onChange={(e)=> setName(e.target.value)}
    />
  </div>
  
  <div className="d-flex justify-content-between m-3">
    <label  className="form-label">Email address</label>
    <input type="text" className="form-control"
      onChange={(e)=> setEmail(e.target.value)}
      />
  </div>
  
 
  <button type="submit" className="btn btn-primary" onClick={handleSubmit}>Submit</button>
</form>
  </>
}

export default Create
