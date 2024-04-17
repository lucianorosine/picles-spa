import { createBrowserRouter } from "react-router-dom";
import { Home } from "./pages/Home/home";
import { Pets } from "./pages/Pets/Pets";
import { PetsDetails } from "./pages/PetDetails";

const router = createBrowserRouter([{
    path: '/',
    element:<Home />,
},
{
    path:'/pets',
    children:[
        {
            index: true,
            element:<Pets />
        },
        {
            path: '/pets/:id',
            element:<PetsDetails/>        }
    ],
},
{
    path:'/admin',
    element:<h1>Admin</h1>,
},
])

export default router