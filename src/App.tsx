import React from 'react';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import './App.css';
import Home from "./scenes/Home";
import AppBar from "./components/AppBar";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },
]);

function App() {
  return (
    <div className="App">
      <AppBar />
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
