import { createSlice } from '@reduxjs/toolkit';
import { updateInvoiceProductDetails } from './invoicesSlice';

const initialProductState = {
  getById: {},
  allIds: [],
  nextId: 1,
};

const productsSlice = createSlice({
  name: 'products',
  initialState: initialProductState,
  reducers: {
    addProduct: (state, action) => {
      const { name, quantity, unitPrice, tax } = action.payload;
      const id = state.nextId;
      const priceWithTax = (unitPrice + tax) * quantity;
      
      state.getById[id] = {
        id,
        name,
        quantity,
        unitPrice,
        tax,
        priceWithTax
      };
      state.allIds.push(id);
      state.nextId += 1;
    },

    updateProduct: (state, action) => {
      const { id, name, quantity, unitPrice, tax } = action.payload;
      if (state.getById[id]) {
        const priceWithTax = (unitPrice + tax) * quantity;
        state.getById[id] = {
          id,
          name,
          quantity,
          unitPrice,
          tax,
          priceWithTax
        };
      }
    },
  }
});

export const {
  addProduct,
  updateProduct,
} = productsSlice.actions;

// Thunk for updating product with invoice sync
export const updateProductWithInvoices = (productData) => async (dispatch) => {
  dispatch(updateProduct(productData));
  dispatch(updateInvoiceProductDetails(productData));
};

export default productsSlice.reducer;