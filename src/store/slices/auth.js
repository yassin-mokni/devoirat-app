import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'src/utils/axios';

const initialState = {
  isAuthenticated: false,
  isInitialised: true,
  user: null
};

export const setSession = (token) => {
  if (token) {
    localStorage.setItem('token', token);
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  } else {
    localStorage.removeItem('token');
    delete axios.defaults.headers.common.Authorization;
  }
};

export const login = createAsyncThunk('auth/login', async (query) => {
  const { email, password } = query;
  let data;
  try {
    const response = await axios.post(`/api/v1/auth/email/login`, {
      email,
      password
    });
    data = await response.data;
    if ((response.status = 200)) {
      return data;
    }
    throw new Error(response.statusText);
  } catch (err) {
    console.log(err);
    return Promise.reject(err.message ? err.message : data?.message);
  }
});

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    initialise: (state, action) => {
      const { isAuthenticated, user } = action.payload;
      state.isAuthenticated = isAuthenticated;
      state.user = user;
    },
    logout: (state) => {
      setSession(null);
      state.isAuthenticated = false;
      state.user = null;
      window.location.href = '/';
    }
  },
  extraReducers: {
    [login.fulfilled]: (state, action) => {
      const { token, user } = action.payload;
      setSession(token);
      state.isAuthenticated = true;
      state.user = user;
    }
  }
});

export const { initialise, logout } = authSlice.actions;

export default authSlice.reducer;
