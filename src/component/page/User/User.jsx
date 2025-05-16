import React, { useState } from 'react';
import {  useLoaderData } from 'react-router';
import Swal from 'sweetalert2';

const User = () => {
    const   insertUser=useLoaderData()
    console.log(insertUser);
    const [user,setUser]=useState(insertUser)


const handlerDelete=(_id)=>{

Swal.fire({
  title: "Are you sure?",
  text: "You won't be able to revert this!",
  icon: "warning",
  showCancelButton: true,
  confirmButtonColor: "#3085d6",
  cancelButtonColor: "#d33",
  confirmButtonText: "Yes, delete it!"
}).then((result) => {
  if (result.isConfirmed) {

  fetch(`http://localhost:3000/users/${_id}`,{
 method: 'DELETE',
  }).then(res=>res.json()).then(data=>
    { console.log(data);
   });


 const remaining=user.filter(uesID=> uesID.id!==_id)
 setUser(remaining)
   Swal.fire({
      title: "Deleted!",
      text: "Your file has been deleted.",
      icon: "success"
    }); }
})



}

    return (
       <div>
<div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>
          
        </th>
        <th>Name</th>
        <th>Job</th>
        <th>Favorite Color</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
     {

    user.map((use,index)=> 

  <tr key={index}>
        <th>
         {index}
        </th>
        <td>
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask mask-squircle h-12 w-12">
                <img
                  src={use?.photo}
                  alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              <div className="font-bold">{use.address}</div>
              <div className="text-sm opacity-50">United States</div>
            </div>
          </div>
        </td>
        <td>
          Zemlak, Daniel and Leannon
          <br />
          <span className="badge badge-ghost badge-sm">Desktop Support Technician</span>
        </td>
        <td>Purple</td>
        <th>
          <button className="btn btn-ghost btn-xs">details</button>
          <button     onClick={()=>handlerDelete(use._id)}   className="btn ">X</button>
        </th>
      </tr>

    )
     } </tbody>
  
  </table>
</div> </div>
    );
};

export default User;