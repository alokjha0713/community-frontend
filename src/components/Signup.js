import React from "react";
import { useEffect, useState } from "react";
import electhon from "../images/electhon.png";
import "./Signup.css";
import { Link , useNavigate } from "react-router-dom";
import { ToastContainer ,toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Signup() {
    const emailRegex = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;
    const navigate = useNavigate();
  const [name, setName] = useState("");
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // toast function
  const notifyA = (msg)=>{toast.error(msg);}
  const notifyB = (msg)=>{toast.success(msg);}
  const postData = () => {
    //checking email
    if(!emailRegex.test(email))
    {
        notifyA("Invalid Email");
        return ;
    }
    
    fetch("http://localhost:5000/api/user/signup",{
        method:"post" ,
        headers:{
            "Content-Type": "application/json"
        },
        body:JSON.stringify({
            name :name,email: email,mobileNumber:"6394414716",Address:"xyz",password: password
        })
    })
    .then(res=>res.json())
    .then(data=>{
        if(data.error)
        {notifyA(data.error);}
        // if(data.message)
        // {
            notifyB(data.message);
            navigate("/signin");
       // }
        console.log(data)});
  };
  return (
    <div className="signup">
      <div className="form-container">
        <div className="form">
          <img className="SingUpLogo" src={electhon} alt=""></img>
          <p className="loginPara">
            sign up to use photos and videos <br /> from your friends
          </p>
          <div>
            <input
              type="email"
              name="email"
              id="email"
              value={email}
              placeholder="email"
              onChange={((e) => {
                setEmail(e.target.value);
              })}
            ></input>
          </div>
          <div>
            <input
              type="text"
              value={name}
              name="name"
              id="name"
              placeholder="full name"
              onChange={((e) => {
                setName(e.target.value);
              })}
            ></input>
          </div>
          <div>
            <input
              type="text"
              name="username"
              id="username"
              value={userName}
              onChange={((e) => {
                setUserName(e.target.value);
              })}
              placeholder="username"
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
          <input
            type="submit"
            id="submit-btn"
            value="Sign up"
            onClick={() => {
              postData();
            }}
          ></input>
        </div>
        <div className="form2">
          Already have an account ?
          <Link to="/Signin">
            <span
              style={{
                color: "blue",
                cursor: "pointer",
              }}
            >
              {" "}
              Sign In
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}
