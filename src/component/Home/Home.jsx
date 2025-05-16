import React, { useState } from 'react';

import { useLoaderData } from 'react-router';
import CoffeeCart from './CoffeeCart';

const Home = () => {
    const Coffee=useLoaderData()
    const [coffees,setCoffees]=useState(Coffee)
    console.log(coffees);
    
    return (
        <div>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
        {coffees.map(coffee=>
            <CoffeeCart  key={coffee._id}
            coffees={coffees}
            setCoffees={setCoffees}
            
            
            coffee={coffee}></CoffeeCart>
        )}
     </div> 
        </div>
    );
};

export default Home;