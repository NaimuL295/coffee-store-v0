import React from 'react';
import { Link } from 'react-router';
import Swal from 'sweetalert2'
const CoffeeCart = ({coffee,coffees,setCoffees}) => {
 
    const {_id,  name, price,  quantity,photo}=coffee;
    const handlerDelete=(_id)=>{
console.log(_id);
Swal.fire({
  title: "Are you sure?",
  text: "You won't be able to revert this!",
  icon: "warning",
  showCancelButton: true,
  confirmButtonColor: "#3085d6",
  cancelButtonColor: "#d33",
  confirmButtonText: "Yes, delete it!"
}).then((result) => {
  console.log(result);
  
  if (result.isConfirmed) {

fetch(`http://localhost:3000/coffees/${_id}`,{
  method:"DELETE",
}).then(res=>res.json()).then(data=>{
if (data.deletedCount) {
   Swal.fire({
    title: "Deleted!",
     text: "Your file has been deleted.",
    icon: "success"

 

  });

  const remainingCoffee=coffees.
  filter(coffee=> coffee._id!==_id)
  setCoffees(remainingCoffee) 
}

})
  
}
});
    }
    return (
        <div>
          <div className="card card-side bg-base-100 shadow-sm">
  <figure>
    <img
      src={photo}
      alt="Movie" />
  </figure>
  <div className="flex justify-center items-center gap-2">
    <div className='space-y-1'>
      <h2 className="">name: {name}</h2>
    <p>price:  {price}</p>
    <p> quantity:  {quantity}</p>
    </div>
    <div className="card-actions justify-end">
      <div className="join join-vertical space-y-1">
<Link to={`/coffee/${_id}`}> <button className="btn join-item">View</button></Link>
<Link to={`/update/${_id}`}>     <button className="btn join-item">edit</button></Link>
  <button  onClick={()=>handlerDelete(_id)}  className="btn join-item">Delete</button>
</div>
    </div>
  </div>
</div>  
        </div>
    );
};

export default CoffeeCart;