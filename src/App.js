import react from 'react'
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar.js';
import Home from './components/Home';
import Signin from './components/Signin.js';
import Signup from './components/Signup.js';
import Profile from './components/Profile.js';
import CreatePost from './components/CreatePost.js'
import {BrowserRouter,Routes,Route} from "react-router-dom" ;
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Navbar></Navbar>
      <Routes>
      <Route path='/:token' element ={<Home/>}/>
      <Route path='/Signup' element ={<Signup/>}/>
      <Route path='/Signin' element ={<Signin/>}/>
      <Route path='/Profile' element ={<Profile/>}/>
      <Route path='/CreatePost/:token' element ={<CreatePost/>}/>
      
      </Routes>

      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
/>

    </div>
    </BrowserRouter>
  );
}

export default App;
