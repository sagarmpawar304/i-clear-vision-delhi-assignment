import { createSlice } from '@reduxjs/toolkit';


const page = createSlice({
  name: "page",
  initialState: {
    page: 1
  },
  reducers: {
    increasePage(state, action) {
      state.page = state.page + 1;
    }
  }
})

const { reducer, actions } = page;

export const { increasePage } = actions;

export default reducer;