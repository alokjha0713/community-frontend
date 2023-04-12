import React from "react";
import { useEffect, useState } from "react";
import electhon from "../images/electhon.png";
import "./signin.css";
import { ToastContainer ,toast} from 'react-toastify';
import { Link,useNavigate } from "react-router-dom";

export default function Signin() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const notifyA = (msg)=>{toast.error(msg);}
    const notifyB = (msg)=>{toast.success(msg);}
    const postData = () => {
        //checking email
        const emailRegex = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
      const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;
        if(!emailRegex.test(email))
        {
            notifyA("Invalid Email");
            return ;
        }
        
        fetch("http://localhost:5000/api/user/signIn",{
            method:"post" ,
            headers:{
                "Content-Type": "application/json"
            },
            body:JSON.stringify({
                email: email,password: password
            })
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.error)
            {notifyA(data.error);}
            // if(data.message)
            // {

                localStorage.setItem('token',data.token);
                console.log("I am in sign inn "+data.user._id);
                localStorage.setItem('user',data.user._id)
                notifyB(data.message);
                console.log("Token In Frontend "+data.token)
                navigate(`/${data.token}`);
            // }
            console.log(data)});
      };
  return (
    <div className="signin">
      <div className="form-container">
        <div className="form">
          <img className="SingInLogo" src={electhon} alt=""></img>
          <p className="loginPara">
            sign in to use photos and videos <br /> from your friends
          </p>
          <div>
            <input
              type="text"
              name="email"
              id="email"
              value={email}
              onChange={((e) => {
                setEmail(e.target.value);
              })}
              placeholder="email"
            ></input>
          </div>
          <div>
            <input
              type="password"
              name="password"
              id="password"
              value={password}
              onChange={((e) => {
                setPassword(e.target.value);
              })}
              placeholder="password"
            ></input>
          </div>
          <p
            className="loginPara"
            style={{ fontsize: "12px", margin: "3px 0px" }}
          >
            By singin up , you agree our terms and conditions
          </p>
          <input type="submit" id="submit-btn" value="Sign in" onClick={()=>{postData()}}></input>
        </div>
        <div className="form2" >
            Don't have an account ?  
            <Link to ='/Signup'>
            <span style ={{
                color: "blue",
                cursor : "pointer",
            }}>    Sign up</span>
            </Link>
        </div>
      </div>
    </div>
  );
}
