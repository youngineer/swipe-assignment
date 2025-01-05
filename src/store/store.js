import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./productSlice.js";
import invoicesReducer from "./invoiceSlice.js";
import customersReducer from "./customerSlice.js";
import apiKeyReducer from "./apiKeySlice.js";

const store = configureStore({
  reducer: {
    products: productsReducer,
    invoices: invoicesReducer,
    customers: customersReducer,
    apiKey: apiKeyReducer,
  },
});

export default store;
