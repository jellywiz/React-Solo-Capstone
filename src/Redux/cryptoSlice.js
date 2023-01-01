import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const getData = createAsyncThunk('crypto/getData', async () => {
  const response = await fetch('https://api.coinstats.app/public/v1/coins/');
  const dataList = await response.json();
  const { coins } = dataList;
  return coins;
});

const initialState = [];
const cryptoSlice = createSlice({
  name: 'crypto',,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getData.fulfilled, (state, action) => action.payload);
  },
});

const { actions, reducer } = cryptoSlice;
export { actions, getData };
export default reducer;
