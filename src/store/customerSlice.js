import { createSlice } from '@reduxjs/toolkit';
import { updateInvoiceCustomerName } from './invoiceSlice.js';

const initialCustomerState = {
  getById: {},
  allIds: [],
  nextId: 1,
};

const customersSlice = createSlice({
  name: 'customers',
  initialState: initialCustomerState,
  reducers: {
    addCustomer: (state, action) => {
      const { customerName, phoneNumber, totalPurchaseAmount } = action.payload;
      const id = state.nextId;
      state.getById[id] = {
        id,
        customerName,
        phoneNumber,
        totalPurchaseAmount
      };
      state.allIds.push(id);
      state.nextId += 1;
    },

    updateCustomer: (state, action) => {
      const { id, ...updates } = action.payload;
      if (state.getById[id]) {
        state.getById[id] = {
          ...state.getById[id],
          ...updates
        };
      }
    },
  }
});

export const {
  addCustomer,
  updateCustomer,
} = customersSlice.actions;

// Thunk for updating customer with invoice sync
export const updateCustomerWithInvoices = (customerData) => async (dispatch) => {
  dispatch(updateCustomer(customerData));
  dispatch(updateInvoiceCustomerName(customerData));
};

export default customersSlice.reducer;