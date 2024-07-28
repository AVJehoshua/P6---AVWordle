import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { AVWordlePage } from './pages/avWordle.jsx'

import './App.css'



const router = createBrowserRouter([
  {
    path: '/wordle',
    element: <AVWordlePage />,
  },
]);




const App = () => {
  return (
    <>
    <RouterProvider router={router} />
    </>
  );
};



export default App;
