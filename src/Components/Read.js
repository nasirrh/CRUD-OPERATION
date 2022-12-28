import axios from 'axios'
import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom';
import Page from './Page';
const Read = () => {

  // const [posts, setPosts] = useState([]);
  // const [loading, setLoading] = useState(false)
  // const [currentPage, setCurrentPage] = useState(1);
  // const [postsPerPage, setPostsPerPage] = useState(10);

  // useEffect(()=>{
  //   const fetchPosts = async () =>{
  //     setLoading(true)
  //     const res = await axios.get("https://63a88204f4962215b583c348.mockapi.io/nasir2/crud-assignment")
  //     setPosts(res.data)
  //     setLoading(false)
  //   }

  //   fetchPosts();
  // }, [])

 
    const [data, setData] = useState([]); 
    const [inputText, setInputText] = useState('');
    const [tabledark, setTableDark] = useState('')
    function getData(){
        axios.get("https://63a88204f4962215b583c348.mockapi.io/nasir2/crud-assignment")
        .then((res) => {
            console.log(res.data);
            setData(res.data)
        })
    }
    function handleDelete(id){
        axios.delete(`https://63a88204f4962215b583c348.mockapi.io/nasir2/crud-assignment/${id}`)
        .then(()=>{

            getData();
        },[])
    }
 const setToLocalStorage = (id, name, email) =>{
        localStorage.setItem("id",id)
        localStorage.setItem("name", name)
        localStorage.setItem("email",email)
    }

    useEffect(()=>{
        getData();
    }, [])
    const inputHandler = (e) =>{
        setInputText(e.target.value.toLowerCase())
    }
  //pagination
    // const indexOfLastPost = currentPage * postsPerPage;
    // const indexOfFirstPost = indexOfLastPost - postsPerPage;
    // const currentPosts = posts.slice(indexOfFirstPost,indexOfLastPost);

   

    const style= {marginTop: "70px"}
  return (
    <>
    <div className="form-check form-switch">
  <input className="form-check-input" type="checkbox" onClick={()=>{
    if(tabledark === "table-dark ") setTableDark("")
    else setTableDark ("table-dark")  }}/>
  
</div>
    <div style={ style}>
  <h2>Read Operation</h2>
  <div class="mb-3">
   
    <input type="text" placeholder='type here' class="form-control" onChange={inputHandler} />
    {/* <Posts posts={posts} loading={loading}/> */}
  
  </div>
  



  <Link to ="/">
        <button className='"btn btn-secondary'>Create</button>
        </Link>
        </div>
    <table className={`table ${tabledark}`}>
    
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Name</th>
      <th scope="col">Email</th>
      <th scope="col"></th>
      
    </tr>
  </thead>
  
  {data.filter((el)=>{
    if (el ===''){
        return el;
    }
    else{
        return(
        el.name.toLowerCase().includes(inputText) ||
                el.email.toLowerCase().includes(inputText )
        )
    }
  }).map((eachData)=>{
        return(
            <>
             <tbody>
           {/* {
             currentData.sort((a,b)=>(a.name < b.name ? -1 : 1)).map((data =>(
              <tr key={data.id}>
                <Data data={data}/>
              </tr>
             ))
           } */}
           
    <tr>


      <th scope="row">{eachData.id}</th>
      <td>{eachData.name}</td>
      <td>{eachData.email}</td>
 
      <td>
      <Link to ="/update">
            <button className='btn-success'onClick={()=> setToLocalStorage(eachData.id,eachData.name,eachData.email)}>Edit</button>
      </Link>
      </td>
      <td><button className='btn-danger'onClick={()=>handleDelete(eachData.id)}>Delete</button></td>
    </tr>
           
    
  </tbody>

            </>
        )
    })
 
  }
</table>
{/* <Page pages = {totalPagesNum} setCurrentPage={setCurrentPage}/> */}
    </>
  )
}

export default Read
