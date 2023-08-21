import './App.css';
import { createBrowserRouter , RouterProvider } from "react-router-dom";

// importing all components:

import Username from './component/Username';
import Register from './component/Register';
import Password from './component/Password';
import Reset from './component/Reset';
import Recovery from './component/Recovery';
import Profile from './component/Profile';
import Pagenotfound from './component/Pagenotfound';
// root route:
const router = createBrowserRouter([
  {
    path:"/",
    element: <div>Root Route</div>
  },
  {
    path: "/register",
    element: <Register/>
  },
  {
    path: "/username",
    element: <Username/>
  },
  {
    path: "/password",
    element: <Password/>
  },
  {
    path: "/reset",
    element: <Reset/>
  },
  {
    path: "/recovery",
    element: <Recovery/>
  },
  {
    path: "/profile",
    element: <Profile/>
  },
  {
    path: "*",
    element: <Pagenotfound/>
  }
]);
function App() {
  return (
    <div className="App">
      {/* <h1 className="text-3xl font-bold underline">Hello world!</h1> */}
      <RouterProvider router={router} ></RouterProvider>
    </div>
  );
}

export default App;
