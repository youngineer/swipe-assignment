import { createSlice } from "@reduxjs/toolkit";


const apiKeySlice = createSlice({
    name: "apiKey",
    initialState: {
        apiKey: ''
    },
    reducers: {
        setApiKey: (state, action) => {
            state.apiKey = action.payload;
        }
    }
});


export const { setApiKey } = apiKeySlice.actions;
export default apiKeySlice.reducer;