import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { issueAPI } from "../../api/issueApi";

export const getIssues = createAsyncThunk(
  "GET_ALL_ISSUES",
  async (payload, thunkAPI) => {
    try {
      const { data } = await issueAPI.getIssues();
      return thunkAPI.fulfillWithValue(data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const addIssues = createAsyncThunk(
  "POST_ISSUES",
  async (payload, thunkAPI) => {
    try {
      const { data } = await issueAPI.addIssue(payload);
      return thunkAPI.fulfillWithValue(data);
    } catch (errer) {
      return thunkAPI.rejectWithValue(errer);
    }
  }
);

export const updateIssues = createAsyncThunk(
  "UPDATAE_ISSUES",
  async (payload, thunkAPI) => {
    try {
      const response = await issueAPI.updateIssue(payload, payload.id);
      return thunkAPI.fulfillWithValue(response.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const deleteIssues = createAsyncThunk(
  "DELETE_ISSUES",
  async (payload, thunkAPI) => {
    try {
      await issueAPI.deleteIssue(payload);
      return thunkAPI.fulfillWithValue(payload);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

/* InitialState */
// data, isLoading, error로 상태관리
const initialState = {
  issue: [],
  isLoading: false,
  error: null,
  lastSortId: 0,
};

export const issueSlice = createSlice({
  name: "issue",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getIssues.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(getIssues.fulfilled, (state, action) => {
      state.issue = action.payload.sort((a, b) => a.sortId - b.sortId);
      state.lastSortId = action.payload.sort((a, b) => a.sortId - b.sortId)[
        action.payload.length - 1
      ].sortId;
      state.isLoading = false;
    });
    builder.addCase(getIssues.rejected, (state, action) => {
      state.isLoading = false;
    });
    builder.addCase(addIssues.fulfilled, (state, action) => {
      state.issue.push(action.payload);
      state.lastSortId += 1;
    });
    builder.addCase(updateIssues.fulfilled, (state, action) => {
      const newState = state.issue.map((item) =>
        action.meta.arg.id === item.id
          ? {
              ...action.payload,
            }
          : item
      );
      state.issue = newState.sort((a, b) => a.sortId - b.sortId);
      state.lastSortId += 1;
    });
    builder.addCase(deleteIssues.fulfilled, (state, action) => {
      const newState = state.issue.filter((item) => item.id !== action.payload);
      state.issue = newState;
    });
  },
});

export default issueSlice.reducer;
