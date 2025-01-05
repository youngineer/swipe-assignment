
import './App.css';
import Body from './components/Body.js';
import Invoice from './components/Invoice.js';
import Product from './components/Product.js';
import Customer from './components/Customer.js';
import Header from './components/Header.js';
import React from 'react';
import ReactDOM from "react-dom/client"
import { Provider } from 'react-redux';
import store from './store/store.js';
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';

function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <Header />
      <Outlet />
    </div>
    </Provider>
  );
};

const appRouter = createBrowserRouter([{
  path: "/",
  element: <Body/>,
  children: [{
    path: "/invoice",
    element: <Invoice />
  },
  {
    path: "/product",
    element: <Product />
  },
  {
    path: "/customer",
    element: <Customer />
  },
  ]

}]);


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);

export default App;
