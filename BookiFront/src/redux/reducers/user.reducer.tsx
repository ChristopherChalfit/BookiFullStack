import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface User {
  id: number;
  email: string;
  name: string;
  role: string;
}

interface UserState {
  user: User;
}

const initialState: UserState = {
  user: {
    id: 0,
    email: "",
    name: "",
    role: "",
  }
};

export const fetchUser = createAsyncThunk(
  "user/fetch",
  async (token: string, thunkAPI) => {
    console.log(token);
    try {
      const response = await fetch("http://127.0.0.1:3000/auth/", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
       },
      });
      const data = await response.json();
      console.log(data);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addUser: (state, action: PayloadAction<{ email: string, name: string, role: string}>) => {
      const { email, name, role } = action.payload;
      state.user = {
        ...state.user,
        id: state.user.id + 1,
        email,
        name,
        role
      };
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchUser.fulfilled, (state, action) => {
      state.user = action.payload;
    });
  },
});

export const { addUser } = userSlice.actions;

export const selectUser = (state: { user: UserState }) => state.user.user;

export default userSlice.reducer;