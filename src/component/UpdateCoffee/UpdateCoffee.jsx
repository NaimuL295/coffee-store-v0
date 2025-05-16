import React from 'react';
import { useLoaderData } from 'react-router';
import Swal from 'sweetalert2';
const UpdateCoffee = () => {

   
    const coffee=useLoaderData()
   const {_id,name ,quantity,supplier,taste,details,price,photo}=coffee
    
    const handlerUpdataCoffee=(e)=>{
e.preventDefault()
const  form=e.target;
const formdata=new FormData(form)
const updataCoffer=Object.fromEntries(formdata.entries())
console.log(updataCoffer);
fetch(`http://localhost:3000/coffees/${_id}`,{
    method:"PUT",
    headers:{
       "Content-Type": "application/json",    
    },
    body:JSON.stringify(updataCoffer)}).then(res=>res.json()).then(data=>{
       if (data.modifiedCount) {
        Swal.fire({
  position: "top-end",
  icon: "success",
  title: "Coffer update Successfully",
  showConfirmButton: false,
  timer: 1500
});

  
}
        
    })
    }
    return (
        <div>
              <div>
    <div className='p-23 text-center space-y-3'> 
         <h1 className='text-6xl '>Updata coffee</h1>  
     
  </div>
        <form onSubmit={handlerUpdataCoffee}   action="">
            <div  className='grid grid-cols-1 md:grid-cols-2 gap-6'>
  <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
  <label className="label">Name</label>
  <input type="text" name='name'  defaultValue={name} className="input w-full" placeholder="Enter coffee name" />
</fieldset>
  <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
  <label className="label">Quantity</label>
  <input type="text" name='quantity'  defaultValue={quantity} className="input w-full" placeholder="Enter coffee chef" />
</fieldset>
  <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
  <label className="label">Supplier</label>
  <input type="text" name='supplier' defaultValue={supplier} className="input w-full" placeholder="Enter coffee supplier" />
</fieldset>
  <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
  <label className="label">Taste</label>
  <input type="text" name='taste'  defaultValue={taste} className="input w-full" placeholder="Enter coffee taste" />
</fieldset>
  <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
  <label className="label">Details</label>
  <input type="text" name='details'  defaultValue={details } className="input w-full" placeholder="Enter coffee details" />
</fieldset>
  <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
  <label className="label">price</label>
  <input type="text" name='price'   defaultValue={price} className="input w-full" placeholder="Enter coffee price" />
</fieldset>
</div>
<fieldset className="fieldset bg-base-200 border-base-300  rounded-box  border p-4">
  <label className="label">Photo</label>
  <input type="text" name='photo'  defaultValue={photo} className="input w-full" placeholder="Enter photo URL" />
</fieldset>

<input type="submit"  className='input btn  w-full' value="Updata Coffee"  />
        </form>
        
        </div>
        </div>
    );
};

export default UpdateCoffee;