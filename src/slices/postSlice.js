import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
// postSlice
export const getPosts = createAsyncThunk(
  "post/getPosts",
  async (info, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(
        "http://localhost:5000/api/post",{
          headers: {
            token: localStorage.getItem("token"),
          },
      
        });
     
      return data;
    } catch (errors) {
      return rejectWithValue(errors.response.data.msg);
    }
  }
);

const postSlice = createSlice({
  name: "post",
  initialState: {
    loading: false,
    postList:[],
    errors: null,
    
  },
  
  extraReducers: {
    [getPosts.pending]: (state, a) => {
        state.loading = true;
      },
    [getPosts.fulfilled]: (state, action) => {
        state.loading = false
      state.postList = action.payload
      state.errors=null
    },
    [getPosts.rejected]: (state, action) => {
        state.loading = false
        state.errors = action.payload;
      },
   
  
},
});
export default postSlice.reducer;
