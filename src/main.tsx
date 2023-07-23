import React from 'react';
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { HomePage } from './pages/HomePage.tsx';
import { NotFoundPage } from './pages/NotFoundPage.tsx';
import { AllBeersPage } from './pages/AllBeersPage.tsx';
import { RandomBeerPage } from './pages/RandomBeerPage.tsx';
import { AddBeerPage } from './pages/AddBeerPage.tsx';
import { BeersDetailPage } from './pages/BeersDetailPage.tsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage/>,
    errorElement: <NotFoundPage/>
  },
  {
    path: "/beers",
    element: <AllBeersPage/>,
  },
  {
    path: "/random-beer",
    element: <RandomBeerPage/>,
  },
  {
    path: "/new-beer",
    element:<AddBeerPage/>,
  },
  {
    path: "/beers/:beerId",
    element:<BeersDetailPage/>,
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
