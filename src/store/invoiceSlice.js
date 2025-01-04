import { createSlice } from '@reduxjs/toolkit';

const initialInvoiceState = {
  getById: {},
  allIds: [],
  nextId: 1,
  productMap: {},
  customerMap: {},
};

const invoicesSlice = createSlice({
  name: 'invoices',
  initialState: initialInvoiceState,
  reducers: {
    addInvoice: (state, action) => {
      const {
        serialNumber,
        customerName,
        productName,
        quantity,
        price,
        tax,
        totalPrice,
        date,
        customerId,
        productId
      } = action.payload;
    
      const id = state.nextId;
    
      state.getById[id] = {
        id,
        serialNumber,
        customerName,
        productName,
        quantity,
        price,
        tax,
        totalPrice,
        date,
        customerId,
        productId
      };
    
      state.allIds.push(id);
      state.nextId += 1;
      
      // Update relationship maps
      if (!state.customerMap[customerId]) {
        state.customerMap[customerId] = [];
      }
      state.customerMap[customerId].push(id);
      
      if (!state.productMap[productId]) {
        state.productMap[productId] = [];
      }
      state.productMap[productId].push(id);
    },
    
    updateInvoiceCustomerName: (state, action) => {
      const { customerId, customerName } = action.payload;
      if (state.customerMap[customerId]) {
        state.customerMap[customerId].forEach(invoiceId => {
          if (state.getById[invoiceId]) {
            state.getById[invoiceId].customerName = customerName;
          }
        });
      }
    },

    updateInvoiceProductDetails: (state, action) => {
      const { productId, name, unitPrice, tax } = action.payload;
      if (state.productMap[productId]) {
        state.productMap[productId].forEach(invoiceId => {
          if (state.getById[invoiceId]) {
            const invoice = state.getById[invoiceId];
            invoice.productName = name;
            invoice.price = unitPrice;
            invoice.tax = tax;
            invoice.totalPrice = (unitPrice + tax) * invoice.quantity;
          }
        });
      }
    },
  }
});

export const {
  addInvoice,
  updateInvoiceCustomerName,
  updateInvoiceProductDetails,
} = invoicesSlice.actions;

export default invoicesSlice.reducer;