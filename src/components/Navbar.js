import react from 'react'
import electhon from '../images/electhon.png'
import {Link,useParams} from 'react-router-dom';
import './Navbar.css'
export default function Navbar(){
    // const { token } = useParams("token");
    const token=localStorage.getItem("token")
    console.log("Token In NaveBar "+token)

    return <div className = 'navbar'>
        <img src ={electhon} alt =""></img>
        <ul className='nav-menu'>
            <Link to='./Signup'>
            <li>Signup</li>
            </Link>
            <Link to='./Signin'>
            <li>Signin</li>
            </Link>
            <Link to='./Profile'>
            <li>Profile</li>
            </Link> 
            {/* <Link to='./CreatePost/'> */}
            <li>
                <a href={`http://localhost:3000/CreatePost/${token}`}>Create Post</a>
            </li>
            {/* </Link>  */}
            
        </ul>
    </div>
}