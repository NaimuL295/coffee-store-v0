import { use } from 'react';
import { AuthContext } from '../Context/AuthContext';

const Signin = () => {
  const {signUser}=use(AuthContext)
    const handlerSignin=(e)=>{
      e.preventDefault()
        
 const email=e.target.email.value;
 const password=e.target.password.value;
signUser(email,password).then((result) => {
  console.log(result);

  const  SignInfo={
    email,
    lastSignInTime:result.user.metadata?.lastSignInTime
  }
  fetch("http://localhost:3000/users",{
method:"PATCH",
 headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(SignInfo)
  }).then((result) => {
 console.log(result);
    
  }).catch((err) => {
  console.log(err);
   
  });
}).catch((err) => {
  console.log(err);
  
});
    }
    return (
        <div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl mx-auto">
          <h1 className="text-5xl font-bold">Sign in up now!</h1>
      <div className="card-body">
        <form  onSubmit={handlerSignin}   className="fieldset">   
          
          <label className="label">Email</label>
          <input  name='email'  type="email" className="input" placeholder="Email" />
          <label className="label">Password</label>
          <input  name='password' type="password" className="input" placeholder="Password" />
          <div><a className="link link-hover">Forgot password?</a></div>
          <button className="btn btn-neutral mt-4">Sign in</button>
        </form>
      </div>
    </div>     
        </div>
    );
};

export default Signin;