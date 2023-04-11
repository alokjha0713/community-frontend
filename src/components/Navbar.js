import react from 'react'
import electhon from '../images/electhon.png'
import {Link} from 'react-router-dom';
import './Navbar.css'
export default function Navbar(){
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
            <Link to='./CreatePost'>
            <li>Create Post</li>
            </Link> 
            
        </ul>
    </div>
}