import React from 'react'
import {FaUserAlt} from "react-icons/fa"
import {MdMailOutline} from "react-icons/md"
import { RiLockPasswordLine, RiLockPasswordFill } from "react-icons/ri";
import "./SignUp.css"
const SignUp = () => {
  return (
    
    <div className="signup-container row px-2 vh-100">
    
    <form className="signup-form col-md-5 mx-auto align-self-center">
    <h1 className="heading">Please fill in your details</h1>
      {/*username */}
      <div className="form-group input-group mb-3">
        <div className = "input-group-prepend">
          <span className = "input-group-text">
            <i><FaUserAlt /></i>
          </span>
        </div>
        <input name = "" className="form-control" placeholder= 'Username' type="text"/>
      </div>
      {/*email*/}
      
      <div className="form-group input-group mb-3">
        <div className = "input-group-prepend">
          <span className = "input-group-text">
            <i><MdMailOutline /></i>
          </span>
        </div>
        <input name = "" className="form-control" placeholder= 'Email' type="email"/>
      </div>
      {/*password*/}
      
      <div className="form-group input-group mb-3">
        <div className = "input-group-prepend">
          <span className = "input-group-text">
            <i><RiLockPasswordLine /></i>
          </span>
        </div>
        <input name = "" className="form-control" placeholder= 'Password' type="password"/>
      </div>

      {/*confirm password*/}
      <div className="form-group input-group mb-3">
        <div className = "input-group-prepend">
          <span className = "input-group-text">
            <i><RiLockPasswordFill /></i>
          </span>
        </div>
        <input name = "" className="form-control" placeholder= 'Confirm password' type="password"/>
      </div>

      {/*Create Account button */}
      <div className="form-group mb-3">
        <button type="button" className="btn btn-primary col-12">Sign Up</button>
      </div>

      {/*Already have account */}
      <p className="text-center text-black">Already have an account? <a href=" " className="">LogIn</a></p>
    </form>
    </div>
  )
}
export default SignUp