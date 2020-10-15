import React, { useState } from 'react';
import Base from "../core/Base";
import {Link,Redirect} from "react-router-dom";
import {signin,authenticate,isAuthenticated } from "../auth/helper/index";


function Signin() {
    const [values,setValues] = useState({
        name:"chandra12",
        email:"chandra12@gmail.com",
        password:"chandra12",
        error:"",
        success: false,
        loading: false,
        didRedirect: false
    });

    const { name, email, password, error, success, loading, didRedirect } = values;//destructuring
    
    const handleChange =(name) =>(event) => {
        setValues({...values,error:false,[name]:event.target.value});
    };

    const onSumit = (event) =>{
        event.preventDefault();
        setValues({...values, error:false,loading:true});
        signin({email,password})
            .then(data => {
                console.log("DATA",data);
                if(data.token){
                   // let sessionToken = data.token;
                    authenticate(data,()=>{
                        console.log("Token added");
                        setValues({
                            ...values,
                            didRedirect:true
                        });
                    });
                }else{
                    setValues({
                        ...values,
                        loading:false,
                    });
                }
            })
            .catch((e) => console.log(e));
    }

    const performRedirect = () => {
        if(isAuthenticated){
            return <Redirect to="/" />
        }
    };

    const loadingMessage = () => {
        return(
            loading && (
                <div className="alert alert-info">
                    <h2>loading...</h2>
                </div>
            )
        )
    }

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

    const signInForm = () => {
        return (
            <div className="row">
                <div className="col-md-6 offset-sm-3 text-left">
                    <form>
                        
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
                        <button onClick={onSumit}  className="btn btn-success btn-block">SUBMIT</button>
                    </form>
                </div>
            </div>
        )
    }

    return (
        <div>
            <Base title="Welcome to Signin Page" description="A tShirt store">
                {loadingMessage()}
                {signInForm()}

                <p className="text-center">{JSON.stringify(values)}</p>
               {/* {performRedirect()} //TODO*/}
            </Base>
            
        </div>
    )
}

export default Signin
