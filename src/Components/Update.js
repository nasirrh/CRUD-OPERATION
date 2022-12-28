import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

const Update = () => {
    const [id, setId] = useState(0);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const navigate = useNavigate();
    useEffect(()=>{
        setId(localStorage.getItem("id"));
        setName(localStorage.getItem("name"));
        setEmail(localStorage.getItem("email"));
    },[])

    const handleUpdate =(e)=>{
        e.preventDefault();
        console.log("Id...", id);
        axios.put(`https://63a88204f4962215b583c348.mockapi.io/nasir2/crud-assignment/${id}`,
        {
            name: name,
        email: email,
        }
        
        ).then(()=>{
            navigate("/read")
        })
    }
    const style= {marginTop: "70px"}
  return (
  <>
  <div style={style}></div>
  <h2>Update</h2>
   <form>
   <div className="mb-3">
    <label  className="form-label">Name</label>
    <input type="text" class="form-control"
      value={name}
       onChange={(e)=> setName(e.target.value)}
    />
  </div>
  
  <div className="mb-3">
    <label  className="form-label">Email address</label>
    <input type="text" class="form-control"  width="10%"
    value={email}
      onChange={(e)=> setEmail(e.target.value)}
      />
  </div>
  
 
  <button type="submit" className="btn btn-primary"
  
   onClick={handleUpdate}
   >Update</button>
   <Link to= "/read"> 
   <button className='btn btn-secondary'>Back</button>
   </Link>  
</form>
  </>
  )
}

export default Update
