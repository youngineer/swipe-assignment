
import './App.css';
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import Body from './components/Body';
import Invoice from './components/Invoice';
import Product from './components/Product';
import Customer from './components/Customer';
import React from 'react';
import ReactDOM from "react-dom/client"
import Header from './components/Header';
import { Provider } from 'react-redux';
import store from './store/store';

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
