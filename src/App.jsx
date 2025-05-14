import React from 'react';
import './App.css';
import { createBrowserRouter, Outlet } from 'react-router-dom';
import Login from './Components/Login';
import Header from './Components/Header';
import Home from "./Components/Home";


const App = () => {
  return(
    <div>
      <Header />
      <Outlet />
    </div>
  )
}


export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      { path: "/", element: <Login /> },
      {path: "/home", element: <Home />},
    ],
  },
]);

export default App;