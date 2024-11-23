import React, { useState } from 'react';
import {useNavigate } from 'react-router-dom';

function Login() {

   let navigate = useNavigate();

    const[credentials, setCredentials]=useState({
        username:"",
        password:""
    })

    const onChangeHandler=(e)=>
    {
        const name=e.target.name;
        const value=e.target.value;
        setCredentials({... credentials,[name]:value});
    }
    const handleSubmit=()=>
    {
            if(credentials.username==="ssreddy" && credentials.password==="12345")
            {
                navigate("/employees");
            }
            else{
                alert("invalid credentials");
            }
    }
  return (
    <div>
        <form  className='text-center Login ' onSubmit={handleSubmit}>
         <input type='text' name="username" value={credentials.username} onChange={onChangeHandler} placeholder='username....' />  <br/><br/>
         <input type='password' name="password" value={credentials.password} onChange={onChangeHandler} placeholder='password....'  /> <br/><br/>
         <button className='btn btn-primary'>Login</button>
         </form>
    </div>
  );
}

export default Login;
