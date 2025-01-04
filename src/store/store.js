import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./productsSlice";
import invoicesReducer from "./invoicesSlice";
import customersReducer from "./customersSlice";
import apiKeyReducer from "./apiKeySlice";

const store = configureStore({
  reducer: {
    products: productsReducer,
    invoices: invoicesReducer,
    customers: customersReducer,
    apiKey: apiKeyReducer,
  },
});

export default store;
