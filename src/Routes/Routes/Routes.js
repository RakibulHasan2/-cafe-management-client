
import { createBrowserRouter } from 'react-router-dom';
import Login from '../../Pages/Login/Login';
import SignUp from '../../Pages/SignUp/SignUp';
import Main from './../../Layout/Main/Main';
import Home from './../../Pages/Home/Home/Home';
const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>, 
        errorElement: <div>Sorry</div>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
        ]
    }
])

export default router;