import React, { use } from 'react';
import { AuthContext } from '../Context/AuthContext';
import Swal from 'sweetalert2';

const Signup = () => {
    const {createUser}=use(AuthContext)
  
    
    const handlerSignUp=e=>{
        e.preventDefault()
// const email=e.target.email.value;
// const password=e.target.password.value;
// console.log(email,password);

const form=e.target;
const formData=new FormData(form);
const {email,password,...rest}=Object.fromEntries(formData)
// const email=formData.get("email")
// const password=formData.get("password")
console.log(email,password);






createUser(email,password).then((result) => {
    console.log(result);
const update={
    email,
rest,
createTime:result.user?.metadata?.creationTime,
signLasTime:result.user?.metadata?.lastSignInTime

}


    fetch('http://localhost:3000/user',{

        method:"POST",
        headers:{
             'Content-Type': 'application/json'

        },
          body: JSON.stringify(update)
    }  ).then(res=>res.json()).then(data=>{
        console.log("update",data);





        
        if (data.insertedId) {
          Swal.fire({
  position: "top-end",
  icon: "success",
  title: "Your work has been saved",
  showConfirmButton: false,
  timer: 1500
});  
        }
    })

}).catch((err) => {
    console.log(err);
    
});
    }
    return (
        <div>
        
   
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl mx-auto">
          <h1 className="text-5xl font-bold">Sign up now!</h1>
      <div className="card-body">
        <form  onSubmit={handlerSignUp}   className="fieldset">
          <label className="label">name</label>
          <input  name='name'  type="name" className="input" placeholder="name" />
          <label className="label">Address</label>
          <input  name='Address'  type="text" className="input" placeholder="Address" />
          <label className="label">photo</label>
          <input  name='photo'  type="text" className="input" placeholder="photo" />
          
          <label className="label">phone number</label>
          <input  name='number'  type="number" className="input" placeholder="number" />
          
          <label className="label">Email</label>
          <input  name='email'  type="email" className="input" placeholder="Email" />
          <label className="label">Password</label>
          <input  name='password' type="password" className="input" placeholder="Password" />
          <div><a className="link link-hover">Forgot password?</a></div>
          <button className="btn btn-neutral mt-4">Sign up</button>
        </form>
      </div>
    </div>
   
        </div>
    );
};

export default Signup;