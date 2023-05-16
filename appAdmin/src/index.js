import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import {createBrowserRouter, RouterProvider, redirect} from 'react-router-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Header from './componants/header';
import './css/index.css'
import AdminPage from './componants/adminpage';
import "bootstrap-icons/font/bootstrap-icons.css";
import AddProduct from './componants/addproduct';
import EditProduct from './componants/editproduct';
import Product from './componants/product';
import Footer from './componants/footer';
import { db } from './db';
import Login from './componants/login';

db.open();

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />
  },
  {
    path: "/main",
    loader: async()=>{
      const response = await fetch("http://localhost:3000/products");
      const data = await response.json();
      return { results: data };
    },
    element: <AdminPage />
  },
  {
    path: "/edit/:productId",
    loader: async({params})=>{
      const response = await fetch(`http://localhost:3000/products/${params.productId}`);
      const data = await response.json();
      return { results: data };
    },
    element: <EditProduct />
  },
  {
    path: "/add",
    element: <AddProduct />
  },
  {
    path: "/processAdd",
    action: async ({request}) =>{
      let formData = await request.formData();
      console.log(formData)
      const data = {
        nom: formData.get("nom"),
        details: formData.get("description"),
        imageSrc: formData.get("imageSrc"),
        prix: formData.get("prix"),
        stock: formData.get("stock"),
        disponible: formData.get("disponible")
      };

       const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    };
    
    fetch('http://localhost:3000/products', options)
      .then(response => response.json())
      .then(data => console.log(data))
      .catch(error => console.error(error));

    return redirect("/main");
    }
  },
  {
    path: "/processEdit",
    action: async ({request}) =>{
      let formData = await request.formData();
      console.log(formData)
      const data = {
        nom: formData.get("nom"),
        details: formData.get("description"),
        imageSrc: formData.get("imageSrc"),
        id: formData.get("idProduct"),
        prix: formData.get("prix"),
        stock: formData.get("stock"),
        disponible: formData.get("disponible")
      };

       const options = {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    };
    
    fetch(`http://localhost:3000/products/${data.id}`, options)
      .then(response => response.json())
      .then(data => console.log(data))
      .catch(error => console.error(error));

    return redirect("/main");
    }
  },
  {
    path: "/processLogin",
    action: async ({request}) =>{
      let formData = await request.formData();
      console.log(formData)

      db.login.add({
        utilisateur: formData.get("nom"),
        mdp: formData.get("mdp")
      })

      return redirect("/main");
    }
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header />
    <RouterProvider router={router}>
        <App />
    </RouterProvider>
    <Footer />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
