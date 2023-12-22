import {createSlice} from '@reduxjs/toolkit';

const exampleSlice = createSlice({
  name: 'example',
  initialState: {
    example: []
  },
  reducers: {
    addExample(state, action) {
      state.example.push(action.payload);
    }
  }
});

export default exampleSlice.reducer;
export const {addExample} = exampleSlice.actions;
