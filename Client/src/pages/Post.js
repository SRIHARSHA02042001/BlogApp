import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Axios from 'axios'
function Post(){
    let {postID}=useParams();
    const [post,setPost]=useState({})
    const [btn,setbtn]=useState("hidden")
    const [utitle,setuTitle]=useState("");
    const [udesc,setuDesc]=useState("");
    const [ucreatedby,setuCreatedBy]=useState("");
    //console.log(postID)
    useEffect(()=>{
        Axios.get('http://localhost:3001/api/getFromId/'+postID).then((data)=>{
            //console.log(data)
            setPost({id:data.data[0].id,title:data.data[0].title,descp:data.data[0].descp,createdby:data.data[0].createdby})
        })
    },[])
    const Updatepost=()=>{
        console.log("in");
        setbtn("visible")
    }
    const UpdatePost=()=>{
        Axios.post('http://localhost:3001/api/update',{id:postID,title:utitle,descp:udesc,createdby:ucreatedby});
        window.alert('Blog updated')
        window.location.reload()
      }
      const deletepost=()=>{
          Axios.get('http://localhost:3001/api/delete/'+postID);
          window.alert("Blog deleted")
          window.location.href='http://localhost:3000/'
      }
      const cancelpost=()=>{
          setbtn("hidden")
      }
    return(
        <div>
            <div className="Postid">
                <h1>Welcome</h1>
                <h1>Your Blog Details</h1>
                <p>Id:{post.id}</p>
                <p>Title:{post.title}</p>
                <p>Description:{post.descp}</p>
                <p>Created By:{post.createdby}</p>
            </div>
            <button onClick={Updatepost}>Edit</button>
            <button onClick={deletepost}>Delete</button>
            <div className="updatePost" style={{visibility:btn}} id="up1">
                <div className="updatepost">
                    <label>Title:</label>
                    <input type="text" onChange={(e)=>{setuTitle(e.target.value);}}/>
                    <label>Created By:</label>
                    <input type="text" onChange={(e)=>{setuCreatedBy(e.target.value);}}/>
                    <label>Description:</label>
                    <textarea onChange={(e)=>{setuDesc(e.target.value);}}/>
                    <button onClick={UpdatePost}>Submit</button><br></br>
                    <button onClick={cancelpost}>Cancel</button>
                </div>
            </div>
        </div>
    )
}
export default Post