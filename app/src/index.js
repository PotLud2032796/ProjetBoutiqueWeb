import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.css';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider, Navigate, redirect } from 'react-router-dom';
import './index.css';

//Component
import PagePrincipalComponent from './Components/PagePrincipalComponent';
import PageProduitComponent from './Components/PageProduitComponent';
import PageErreurComponent from './Components/PageErreurComponent';

//Route
const router = createBrowserRouter([
  {
    path:"/",
    element: <PagePrincipalComponent/>
  },
  {
    path:"/Produit/:id?",
    loader: async({params}) =>{

      if (!params.id) {
        throw new Error('Missing ID');
      }

      return fetch(`http://localhost:3000/produits/${params.id}`);
    },
    element: <PageProduitComponent/>,
    errorElement: <PageErreurComponent/>
  },
  {
    path:"/Acheter/:id?",
    loader: async({params}) =>{

      if (!params.id) {
        throw new Error('Missing ID');
      }

      return fetch(`http://localhost:3000/produits/${params.id}`);
    },
    element: <PageProduitComponent/>,
    errorElement: <PageErreurComponent/>
  },
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
