import React from 'react'
import './createPost.css'
import { useEffect, useState } from "react";
import { ToastContainer ,toast} from 'react-toastify';
import { Link,useNavigate,useParams } from "react-router-dom";
export default function CreatePost() {

    const token=localStorage.getItem("token")
    const loadfile = (event)=>{
        const output = document.getElementById('output');
        output.src = URL.createObjectURL(event.target.files[0]);
        output.onload = function() {
        URL.revokeObjectURL(output.src)
    }
}
const [body, setBody] = useState("");
let urlfinal="";
const [image, setImage] = useState("");
const [url, setUrl] = useState("");
const navigate = useNavigate();
const notifyA = (msg)=>{toast.error(msg);}
const notifyB = (msg)=>{toast.success(msg);}
const postDetails = async ()=>{
    console.log(body , image);
    const data = new FormData();

    data.append("file", image)
    data.append("upload_preset", "community2")
    data.append("cloud_name", "commcloud")
    const res1 = await fetch("https://api.cloudinary.com/v1_1/commcloud/image/upload",{
        method: "post",
        body: data,
    })
    const ImgData = await res1.json()
    const url1 = ImgData.url;
    urlfinal=url1
    console.log("00000000000000444444444444444444444444"+url1);
    setUrl(url1);
    //.then(res=>{
    //     res.json("hello i occured")
    // }).then((data)=>{setUrl("https://res.cloudinary.com/commcloud/image/upload/v1681198456/background_s7zrfg.webp")})
    // .catch(err=>{console.log(err)});

    const token=localStorage.getItem("token")
    console.log("this is alok"+url)
    fetch(`http://localhost:5000/api/post/createPost/${token}`,{
        method:"post",
        headers:{
            'Content-Type' : 'application/json',
        },

        body:JSON.stringify({
            body:body,pic:urlfinal
        })

    })
    .then(res=>res.json())
        .then(data=>{
            console.log(data)
            navigate(`/home/${token}`)
        });

}
    return (
    <div className='post-create'>
        <div className='post-create-form'>
        <div className ='post-create-post'>
            <h1>Create a New Post</h1>
            <h6 onClick={()=>{postDetails()}}>Share </h6>
        </div>
        <div className='post-create-upload-post'>
            <img id ='output' src='https://th.bing.com/th/id/OIP.n7ajLUEb277vIJ4loEWbBAHaGV?pid=ImgDet&rs=1'  alt=''/>
            <input type='file' placeholder='Choose file' accept="image/*,video/*" onChange={(event) => {
            loadfile(event);
            setImage(event.target.files[0])
          }} >
            </input>
        </div>
        <div className="post-create-show-profile">
            <div className="post-create-profile-pic">
                <img  src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cGVyc29ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" width={500} height={500} alt="" >
                </img>
            </div>
            <h5>Ramesh</h5>
        </div>
        <div className='post-create-caption'>
            <textarea style={{width:"100%"} } placeholder="give a caption" value={body} onChange={((e) => {
                setBody(e.target.value);
            })}></textarea>
        </div>
        </div>
    </div>
  )
}
