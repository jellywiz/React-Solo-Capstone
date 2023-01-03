import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const getData = createAsyncThunk('crypto/GetAll', async (limit) => {
  const response = await fetch(`https://api.coinstats.app/public/v1/coins?limit=${limit}`);
  const assetLists = await response.json();
  const { coins } = assetLists;
  return coins;
});
const initialState = [];
const cryptoSlice = createSlice({
  name: 'crypto',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getData.fulfilled, (state, action) => action.payload);
  },
});
const { actions, reducer } = cryptoSlice;
export { actions, getData };
export default reducer;
