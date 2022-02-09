import React, { useEffect, useState } from 'react'
import '../App.css'
import Axios from 'axios'
function CreatePost() {
  const [title,setTitle]=useState("");
  const [desc,setDesc]=useState("");
  const [createdby,setCreatedBy]=useState("");
  const submitPost=()=>{
    Axios.post('http://localhost:3001/api/create',{title:title,desc:desc,createdby:createdby});
    window.alert('Blog created')
    window.location.href='http://localhost:3000/'
  }
  return (
    <>
    <h3 className='createheader'>Register</h3>
    <div className="CreatePost">
      <div className="uploadpost">
        <label>Title:</label>
        <input type="text" onChange={(e)=>{setTitle(e.target.value);}}/>
        <label>Created By:</label>
        <input type="text"onChange={(e)=>{setCreatedBy(e.target.value);}}/>
        <label>Description:</label>
        <textarea onChange={(e)=>{setDesc(e.target.value);}}/>
        <button onClick={submitPost}>Submit</button>
      </div>
    </div>
    </>
  );
}
export default CreatePost
