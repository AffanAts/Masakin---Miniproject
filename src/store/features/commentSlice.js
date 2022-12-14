import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import commentAPI from "../../api/komen.api";

const initialState = {
  data: [],
  componentStatus: false,
};

export const fetchComment = createAsyncThunk("fetch/komentar", async () => {
  try {
    const response = await commentAPI.getAllComment();
    return response.data.komentar;
  } catch (error) {
    console.log(error);
  }
});

export const createComment = createAsyncThunk(
  "create/komentar",
  async ({ nama, konten, isi }) => {
    try {
      const response = await commentAPI.createComment({ nama, konten, isi });
      return response.data.insert_komentar;
    } catch (error) {
      console.log(error);
    }
  }
);

export const deleteComment = createAsyncThunk("delete/komentar", async (id) => {
  try {
    const response = await commentAPI.deleteCommentById(id);
    return response.data.delete_komentar.returning[0];
  } catch (error) {
    console.log(error);
  }
});

const todoSlice = createSlice({
  name: "komentar",
  initialState,
  extraReducers(builder) {
    builder
      .addCase(fetchComment.fulfilled, (state, action) => {
        state.data = action.payload;
      })
      .addCase(createComment.fulfilled, (state, action) => {
        state.data.push(action.payload);
        state.componentStatus = !state.componentStatus;
      })
      .addCase(deleteComment.fulfilled, (state, action) => {
        state.fetchStatus = !state.fetchStatus;
        state.data = state.data.filter((item) => item.id !== action.payload.id);
      });
  },
});

export default todoSlice.reducer;
