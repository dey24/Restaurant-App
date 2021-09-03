import React from 'react'
import {FaUserAlt} from "react-icons/fa"
import {MdMailOutline} from "react-icons/md"
import { RiLockPasswordLine, RiLockPasswordFill } from "react-icons/ri";
import "./SignUp.css"
import {Link} from "react-router-dom"
import {useState} from "react"
import isEmail from 'validator/lib/isEmail';
import isEmpty from 'validator/lib/isEmpty';
import equals from 'validator/lib/equals';
import { showError } from '../helpers/message';

const SignUp = () => {
  const[formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    password2: '',
    successMsg: false,
    errorMsg: false,
    loading: false,
  })

  const {username, email, password, password2, successMsg, errorMsg, loading} = formData;

  //event handlers
  const handleChange = (e) => {
    //console.log(e)
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    //client-side validation
    if(isEmpty(username) || isEmpty(email) || isEmpty(password) || isEmpty(password2)){
      setFormData({
        ...formData, errorMsg: "All fields are required"
      })
    }else if(!isEmail(email)){
      setFormData({
        ...formData, errorMsg: "Please enter a valid email"
      })
    }else if(!equals(password, password2)){
      setFormData({
        ...formData, errorMsg: "Passwords do not match"
      })
    }else{
      //successful

    }
  }
  
  return (
    <div>
      <div className="signup-container row px-1" >
      
      <form className="signup-form col-md-5 mx-auto align-self-center" onSubmit ={handleSubmit}>
      <h1 className="heading">Please fill in your details</h1>
        {/*username */}
        <div className="form-group input-group mb-3">
          <div className = "input-group-prepend">
            <span className = "input-group-text">
              <i><FaUserAlt /></i>
            </span>
          </div>
          <input name = "username" value = {username} className="form-control" placeholder= 'Username' type="text" onChange={handleChange}/>
        </div>
        {/*email*/}
        
        <div className="form-group input-group mb-3">
          <div className = "input-group-prepend">
            <span className = "input-group-text">
              <i><MdMailOutline /></i>
            </span>
          </div>
          <input name = "email" value= {email} className="form-control" placeholder= 'Email' type="email" onChange={handleChange}/>
        </div>
        {/*password*/}
        
        <div className="form-group input-group mb-3">
          <div className = "input-group-prepend">
            <span className = "input-group-text">
              <i><RiLockPasswordLine /></i>
            </span>
          </div>
          <input name = "password" value = {password} className="form-control" placeholder= 'Password' type="password" onChange={handleChange}/>
        </div>

        {/*confirm password*/}
        <div className="form-group input-group mb-3">
          <div className = "input-group-prepend">
            <span className = "input-group-text">
              <i><RiLockPasswordFill /></i>
            </span>
          </div>
          <input name = "password2" value = {password2} className="form-control" placeholder= 'Confirm password' type="password" onChange={handleChange}/>
        </div>

        {/*Create Account button */}
        <div className="form-group mb-3">
          <button type="submit" className="btn btn-primary col-12">Sign Up</button>
        </div>

        {/*Already have account */}
        <p className="text-center text-black">Already have an account? <Link to="logIn" className="">LogIn</Link></p>
      </form>

      <p>{JSON.stringify(formData)}</p>
      </div>
    </div>
  )
}
export default SignUp