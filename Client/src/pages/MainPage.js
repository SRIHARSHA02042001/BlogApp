import Axios from 'axios'
import React, { useEffect, useState } from "react";
import {useNavigate}from 'react-router-dom'
function MainPage(){
    const [postList,setPostList]=useState([])
    let Navigate=useNavigate()
    useEffect(()=>{
        Axios.get("http://localhost:3001/api/get").then((data)=>{
            setPostList(data.data)
        });
    },[]);
    return(
        <div className="MainPage">
            <div className="PostContainer">
                <h1>Welcome!</h1>
                <p>List Of Blogs Available </p>
                {postList.map((val,key)=>{
                 return(
                 <div className="Post" onClick={()=>{Navigate('/post/'+val.id)}}>
                     <h2>Title:{val.title}</h2>
                     <p>Click here for more details</p>
                </div>
                );
            })};
            </div>
        </div>
    );
}
export default MainPage;