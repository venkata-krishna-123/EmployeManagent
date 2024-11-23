import React, { Component } from 'react';


export default class LoginComponent extends Component {

   

  render() {
    return (
      <div>
        <form onSubmit={handleSubmit} method='post'>
         <input type='text' name="username" value={credentials.username} onChange={onChangeHandler} placeholder='username....' />  <br/><br/>
         <input type='password' name="password" value={credentials.password} onChange={onChangeHandler} placeholder='password....' /> <br/><br/>
         <button className='btn btn-primary'>Login</button>
         </form>
      </div>
    );
  }
}
