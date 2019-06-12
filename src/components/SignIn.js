import React from 'react';
class SignIn extends React.Component{
 
    constructor(props){
        super(props)
        this.state = {};
    }

   render(){
       let {email, password} = this.state;
       return (
       <div class='login-wrap'>
          <form name='loginForm'>
            <label>Name</label>
            <input type='name'name='email'/>
            <br/>
            <label>Password</label>
            <input type='password' name='password'/>
            <input type='submit' value='login'/>
          </form>
       </div>
       );
   }
}

export default SignIn;