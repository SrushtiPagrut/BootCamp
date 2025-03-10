import { createBrowserRouter } from "react-router-dom";
import Login from "../Component/auth/Login";
import SignUp from "../Component/auth/Signup";
import AllBootCamp from "../Component/Boot-Camp/AllBootCamp";
import CreateBootcamp from "../Component/Boot-Camp/CreateBootcamp";
import SingleBootCampDetails from "../Component/Boot-Camp/SingleBootCampDetails";
import EditBootcamp from "../Component/Boot-Camp/EditBootcamp";
import App from "../App";
import PrivateRoute from "./PrivateRoute";
import BootcampDetails from "../Component/Boot-Camp/BootCampDetails";
import Createcourse from "../Component/Courses/Createcourse";
import Allcourses from "../Component/Courses/Allcourses";


export let routes=createBrowserRouter([
    {
        path:'/',
        element:<App/>,
        children:[
            {
                path:"/login",
                element:<Login/>
            },
            {
                path:"/register",
                element:<SignUp/>
            },
            {
                path:"allbootcamps",
                element:<PrivateRoute>
                    <AllBootCamp/>
                </PrivateRoute>
            },
            {
                path:"/createbootcamp",
                element:<CreateBootcamp/>
            },
            {
                path:"/singlebootcamp",
                element:<SingleBootCampDetails/>
            },
            {
                path:"/editbootcamp/:id",
                element:<EditBootcamp/>
            },
            // {
            //     path: "/bootcampdetails",
            //     element: <BootcampDetails/>
            // },
            {
                path: "/createcourse",
                element:<Createcourse/>
            },
            {
                path:"/allcourses",
                element:<Allcourses/>
            }
        ]
    }
])