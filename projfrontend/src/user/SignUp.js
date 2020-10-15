import React,{useState} from 'react';
import Base from "../core/Base";
import {Link} from "react-router-dom";
import {signup} from "../auth/helper/index";

const SignUp = () => {
    const [values,setValues] = useState({
        name:"",
        email:"",
        password:"",
        error:"",
        success:false
    });

    const { name, email, password, error, success } = values;//destructuring
    
    const handleChange =(name) =>(event) => {
        setValues({...values,error:false,[name]:event.target.value});
    };

    const onSubmit = (event) => {
        event.preventDefault();
        setValues({...values,error:false})
        signup({name, email, password})
            .then(data => {
                console.log("DATA",data);
                if(data.email === email){
                    setValues({
                        ...values,
                        name:"",
                        email:"",
                        password:"",
                        error:"",
                        success:true
                    })
                }else{
                    setValues({
                        ...values,
                        error:true,
                        success:false

                    })
                }
            })
            .catch(e => console.log(error))


    };

    const successMessage = () => {
        return (
            <div className="row">
                <div className="clo-md-6 offset-sm-3 text-center">
                    <div
                     className="alert alert-success"
                     style={{
                         display: success ? "" : "none"
                     }}
                    >
                        New Account created successfully.Please
                        <Link to="/signin"> Login now. </Link> 
                    </div>
                </div>
            </div>
        )
    }

    const errorMessage = () => {
        return (
            <div className="row">
                <div className="clo-md-6 offset-sm-3 text-center">
                    <div
                     className="alert alert-danger"
                     style={{
                         display: error ? "" : "none"
                     }}
                    >
                        Check all the fields again.
                    </div>
                </div>
            </div>
        )
    }

    const signUpForm = () => {
        return (
            <div className="row">
                <div className="col-md-6 offset-sm-3 text-left">
                    <form>
                        <div className="form-group">
                            <label className="text-light">Name</label>
                            <input 
                                type="text"
                                className="form-control"
                                value={name}
                                onChange={handleChange("name")}
                                />
                        </div>
                        <div className="form-group">
                            <label className="text-light">Email</label>
                            <input 
                                type="text"
                                className="form-control"
                                value={email}
                                onChange={handleChange("email")}
                                />
                        </div>
                        <div className="form-group">
                            <label className="text-light">Password</label>
                            <input 
                                type="password"
                                className="form-control"
                                value={password}
                                onChange={handleChange("password")}
                                />
                        </div>
                        <button onClick={onSubmit}  className="btn btn-success btn-block">SUBMIT</button>
                    </form>
                </div>
            </div>
        )
    }

    return (
        <Base title="Sign Up Page" description="a sign up for users" >
            {successMessage()}
            {errorMessage()}
            {
                signUpForm()
            }
            <p className="text-white text-center">
                {
                    JSON.stringify(values)
                }
            </p>
        </Base>
    )
}

export default SignUp