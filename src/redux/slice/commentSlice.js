import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { commentAPI } from "../../api/issueApi";

export const getCommentsAll = createAsyncThunk(
  "GET_ALL_COMMENTS",
  async (payload, thunkAPI) => {
    try {
      const { data } = await commentAPI.getCommentAll();
      return thunkAPI.fulfillWithValue(data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const getComments = createAsyncThunk(
  "GET_PAGE_COMMENTS",
  async (payload, thunkAPI) => {
    try {
      const { data } = await commentAPI.getComments(payload);
      return thunkAPI.fulfillWithValue(data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const getCommentsPaging = createAsyncThunk(
  "GET_PAGE_COMMENTS_Paging",
  async (payload, thunkAPI) => {
    try {
      const { data } = await commentAPI.getComments(payload);
      return thunkAPI.fulfillWithValue(data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const getCommentsOne = createAsyncThunk(
  "GET_COMMENT_ONE",
  async (payload, thunkAPI) => {
    try {
      const { data } = await commentAPI.getCommentDetail(payload.id);
      return thunkAPI.fulfillWithValue(data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const addComments = createAsyncThunk(
  "POST_COMMENTS",
  async (payload, thunkAPI) => {
    try {
      const { data } = await commentAPI.addComments(payload);
      return thunkAPI.fulfillWithValue(data);
    } catch (errer) {
      return thunkAPI.rejectWithValue(errer);
    }
  }
);

export const updateComments = createAsyncThunk(
  "UPDATAE_COMMENTS",
  async (payload, thunkAPI) => {
    try {
      const { data } = await commentAPI.updateComment(payload);
      return thunkAPI.fulfillWithValue(data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const deleteComments = createAsyncThunk(
  "DELETE_COMMENTS",
  async (payload, thunkAPI) => {
    try {
      await commentAPI.deleteCommentt(payload);
      return thunkAPI.fulfillWithValue(payload);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

/* InitialState */
// data, isLoading, error로 상태관리
const initialState = {
  comment: [],
  isLoading: false,
  error: null,
  maxLength: 0,
};

export const commentSlice = createSlice({
  name: "comments",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getCommentsAll.fulfilled, (state, action) => {
      // state.comment = action.payload;
      state.maxLength = action.payload.length;
    });
    builder.addCase(getComments.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(getComments.fulfilled, (state, action) => {
      state.comment = state.comment.concat(action.payload);
      state.isLoading = false;
    });
    builder.addCase(getCommentsOne.fulfilled, (state, action) => {
      state.comment = action.payload;
    });
    builder.addCase(getCommentsPaging.fulfilled, (state, action) => {
      state.comment = action.payload;
    });
    builder.addCase(addComments.fulfilled, (state, action) => {
      state.comment.unshift(action.payload);
      state.comment.pop();
      state.maxLength += 1;
    });
    builder.addCase(updateComments.fulfilled, (state, action) => {
      const newState = state.comment.map((item) =>
        action.meta.arg.id === item.id
          ? {
              ...action.payload,
            }
          : item
      );
      state.comment = newState;
    });
    builder.addCase(deleteComments.fulfilled, (state, action) => {
      const newState = state.comment.filter(
        (item) => item.id !== action.payload
      );
      state.comment = newState;
      state.maxLength -= 1;
    });
  },
});

export default commentSlice.reducer;
