import React from 'react';
import Swal from 'sweetalert2'


const AddCoffee = () => {
    const handlerAddCoffee=(e)=>{
e.preventDefault();
const form=e.target;


const formData=new FormData(form)
console.log(formData.entries());
const newData= Object.fromEntries(formData.entries())
  console.log(newData);
  fetch('http://localhost:3000/coffees',{
    method:"POST",
    headers:{
  'Content-Type': 'application/json',
    },
    body:JSON.stringify(newData)
  }).then(res=>res.json()).
  then(data=>{
if (data.insertedId) {
  console.log("add successful");
  

Swal.fire({
  title: "Coffee Add Successfully",
  icon: "success",
  draggable: true
});


}
    })
}
    return (
        <div>
    <div className='p-23 text-center space-y-3'> 
         <h1 className='text-6xl '>Add coffee</h1>  
      <p> It is a long established fact that a reader will be distraceted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.</p>
      </div>
        <form onSubmit={handlerAddCoffee}   action="">
            <div  className='grid grid-cols-1 md:grid-cols-2 gap-6'>
  <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
  <label className="label">Name</label>
  <input type="text" name='name' className="input w-full" placeholder="Enter coffee name" />
</fieldset>
  <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
  <label className="label">Quantity</label>
  <input type="text" name='quantity' className="input w-full" placeholder="Enter coffee chef" />
</fieldset>
  <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
  <label className="label">Supplier</label>
  <input type="text" name='supplier' className="input w-full" placeholder="Enter coffee supplier" />
</fieldset>
  <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
  <label className="label">Taste</label>
  <input type="text" name='taste' className="input w-full" placeholder="Enter coffee taste" />
</fieldset>
  <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
  <label className="label">Details</label>
  <input type="text" name='details' className="input w-full" placeholder="Enter coffee details" />
</fieldset>
  <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
  <label className="label">price</label>
  <input type="text" name='price' className="input w-full" placeholder="Enter coffee price" />
</fieldset>
</div>
<fieldset className="fieldset bg-base-200 border-base-300  rounded-box  border p-4">
  <label className="label">Photo</label>
  <input type="text" name='photo' className="input w-full" placeholder="Enter photo URL" />
</fieldset>

<input type="submit"  className='input btn  w-full' value="Add Coffee"  />
        </form>
        
        </div>
    );
};

export default AddCoffee;