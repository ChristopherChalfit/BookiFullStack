import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchUser } from "./user.reducer";

export interface Auth {
  token: string;
}

interface AuthState {
  auth: Auth;
}

const initialState: AuthState = {
  auth: {
    token: "",
  },
};

export const fetchAuth = createAsyncThunk(
  "auth/fetch",
  async ({email, password}: {email: string, password: string}, thunkAPI) => {
    try {
      const response = await fetch("http://127.0.0.1:3000/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({email, password}),
      });
      const data = await response.json();
      await thunkAPI.dispatch(fetchUser(data.access_token));
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    addAuth: (state, action: PayloadAction<{ token: string }>) => {
      const { token } = action.payload;
      console.log(token);
      state.auth = {
        ...state.auth,
        token,
      };
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchAuth.fulfilled, (state, action) => {
      state.auth.token = action.payload.access_token;
    });
  },
});

export const { addAuth } = authSlice.actions;
export const selectAuth = (state: { auth: AuthState }) => state.auth.auth;

export default authSlice.reducer;
