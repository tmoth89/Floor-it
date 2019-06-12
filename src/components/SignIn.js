import React from 'react';
import { genericTypeAnnotation } from '@babel/types';
class SignIn extends React.Component{
    constructor(props){
        super(props)
        this.state = {};
    }


   render(){
       const styles = {
        width: '200px',
        height: '100px',
        padding: '20px',
        margin: '100px auto',
        boxShadow: '0px 0px 10px 2px grey'
       }

       return (
        <div className='login-wrap' style={styles}>
         
            <label>Name</label>
            <input type='name'name='email'/>
         
            <label>Password</label>
            <input type='password' name='password'/>
            <input type='submit' value='login'/>
        </div>
       );
   }
}

export default SignIn;