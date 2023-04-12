import {React,useEffect,useState} from 'react'
import './home.css'
import {useParams} from 'react-router-dom';
import Navbar from './Navbar';


export default function Home() {
// const {token}=useParams("token")
console.log("Token In Home "+ localStorage.getItem('token'))
// const res1 = fetch("https://api.cloudinary.com/v1_1/commcloud/image/upload",{
        
// })
const [data,setData] =useState([]);
const token=localStorage.getItem('token')
useEffect(() => {
    fetch(`http://localhost:5000/api/post/allposts/${token}`,{
        method:"get",
    })
    .then(res=>res.json())
    .then((data1)=>{
        console.log(data1);
        setData(data1)
        });

}, []);

const likePost = (id) => {
    console.log("in likePost function "+id )
    fetch(`http://localhost:5000/api/post/likes/${token}`, {
    method: "put",
    headers: {
        "Content-Type": "application/json",
      },
    body: JSON.stringify({
        postId: id
    }),
    })
    .then((res) => res.json())
    .then((result) => {
        const newData = data.map((posts) => {
        if (posts._id == result._id) {
            return result;
        } else {
            return posts;
        }
        });
        setData(newData);
        console.log(result);
    });
};
    const unlikePost = (id) => {
    fetch(`http://localhost:5000/api/post/unlike/${token}`, {
        method: "put",
        headers: {
        "Content-Type": "application/json",
        },
        body: JSON.stringify({
        postId: id,
        }),
    })
        .then((res) => res.json())
        .then((result) => {
        const newData = data.map((posts) => {
            if (posts._id == result._id) {
            return result;
            } else {
            return posts;
            }
        });
        setData(newData);
        console.log(result);
        });
  };
// console.log("hello this is res1 " + res1);

return (
    
    
    <div className="home">
        {data.map((posts)=>{
            return (
                <div className="card">
                <div className="card-header">
                    <div className="card-pic">
                        <img src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cGVyc29ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" width={500} height={500} alt="">
                        </img>
                    </div>
                    <h5>{posts.postedBy.name}</h5>
                </div>
                {/* card image */}
                <div className='card-image'>
                    <img src ={posts.pic} alt ="">
                    </img>
                </div>
                {/* card content  */}
                <div className='card-content'>
                    {/* like and unlike function */}
                    {posts.likes.includes(localStorage.getItem("user")) ? (
                <span
                    className="material-symbols-outlined material-symbols-outlined-red"
                    onClick={() => {
                        console.log("unlike button press karon    ")
                    unlikePost(posts._id);
                    }}
                >
                    favorite
                </span>
                ) : (
                <span
                    className="material-symbols-outlined"
                    onClick={() => {
                        console.log("like button press karon       "+ posts._id)
                    likePost(posts._id);
                    }}
                >
                    favorite
                </span>
                )}
                {/* <span class="material-symbols-outlined">
                    favorite
                </span> */}
                <p>{posts.likes.length} like</p>
                <p>{posts.body}</p>
                </div>
                <div className='add-comment'>
                <span class="material-symbols-outlined">
                mood
                </span>
                <input type="text" placeholder='Add a comment ' ></input>
                <button className='comment'>Post</button>
                </div>
                </div>
            );
        })}

    </div>
  )
}
