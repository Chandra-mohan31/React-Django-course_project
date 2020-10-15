import React from 'react';
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import Home from "./core/Home";
import PrivateRoutes from "./auth/helper/PrivateRoutes";
import SignUp from "./user/SignUp";
import UserDashboard from "./user/UserDashboard";
import Signin from "./user/Signin";
import Cart from "./core/Cart";

const Routes = () => {
    return(
        <Router>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/signup" exact component={SignUp} />
                <Route path="/signin" exact component={Signin} /> 
                <Route path="/cart" exact component={Cart} />  
                 <PrivateRoutes path="/user/dashboard" exact component={UserDashboard} /> 
               
            </Switch>
        </Router>
    )
}

export default Routes