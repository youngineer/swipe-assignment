import { createSlice } from "@reduxjs/toolkit";


const appSlice = createSlice({
    name: "appSlice",
    initialState: {
      allEntities: {},
      allIds: [],
      nextId: 1,
    },
    reducers: {
      addEntity: (state, action) => {
        const data = action.payload;
        state.allEntities[state.nextId] = data;
        state.allIds.push(state.nextId);
        state.nextId += 1;
      },
      updateEntity: (state, action) => {
        const { data, id } = action.payload;
        if (state.allEntities[id]) {
          state.allEntities[id] = { ...state.allEntities[id], ...data };
        }
      },
    },
  });
  
  export const { addEntity, updateEntity } = appSlice.actions;
  export default appSlice.reducer;
  