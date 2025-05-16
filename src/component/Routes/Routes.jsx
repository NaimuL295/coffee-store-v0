import {
  createBrowserRouter,

} from "react-router";
import MainLayout from "../MainLayout/MainLayout";
import Home from "../Home/Home";
import AddCoffee from "../AddCoffee/AddCoffee";
import UpdateCoffee from "../UpdateCoffee/UpdateCoffee";
import CoffeeDetails from "../CoffeeDetails";
import Signin from "../page/Signin";
import Signup from "../page/Signup";
import User from "../page/User/User";



;

export const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children:[
        {index:true,
          loader:()=>fetch("http://localhost:3000/coffees"),
          Component:Home},
        {path:'addCoffee',
            Component:AddCoffee },

            {path:"/coffee/:id",
            loader:({params})=>fetch(`http://localhost:3000/coffees/${params.id}`),
             Component:CoffeeDetails
            },
          {path:'/update/:id',
         loader: ({params})=>fetch(`http://localhost:3000/coffees/${params.id}`),
                  Component:UpdateCoffee
           
                },
                {path:"signup",
                  Component:Signup
                },
                {path:"signin",Component:Signin},

                {path:"user",
                loader:()=>fetch("http://localhost:3000/users"),
                  
                  Component:User}
    ]
  },
]);


