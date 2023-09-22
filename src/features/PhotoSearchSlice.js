import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { createApi } from "unsplash-js";
import { toast } from 'react-toastify';

const initialState = {
  pics: []
}

export const searchPhotos = createAsyncThunk('data/fetchPhotos', async (searchText) => {
  const unsplash = createApi({ accessKey: 'YOO-Ph4IujEIzCMCykhy7ZrXwliK4o_CMYh8tOAWxWE' });
  const data = await unsplash.search.getPhotos({ query: searchText, page: 1, perPage: 50 })
  const feed = data.response;
  const { results } = feed;
  return results;
});

export const PhotoSearchSlice = createSlice({
  name: 'photoSearch',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(searchPhotos.pending, () => {
        // executed when your promise is pending
      })
      .addCase(searchPhotos.fulfilled, (state, action) => {
        // executed when your promise is fulfilled
        state.pics = action.payload;
        if (state.pics.length === 0){
          toast.error('No Images Found!', { autoClose: 3000 })
        }
      })
      .addCase(searchPhotos.rejected, () => {
        // executed when your promise is rejected
      });
  },
})

export default PhotoSearchSlice.reducer;