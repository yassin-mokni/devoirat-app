import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'src/utils/axios';

const initialState = {
  isAuthenticated: false,
  isInitialised: true,
  user: null,
  error: null
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

export const register = createAsyncThunk('auth/register', async (query) => {
  const { email, password } = query;
  let data;
  try {
    const response = await axios.post(`/api/v1/auth/email/register`, {
      email,
      password,
      firstName: 'John',
      lastName: 'Doe'
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

export const adminLogin = createAsyncThunk('auth/adminLogin', async (query) => {
  const { email, password } = query;
  let data;
  try {
    const response = await axios.post(`/api/v1/auth/admin/email/login`, {
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
    [login.pending]: (state) => {
      state.error = null;
    },
    [login.fulfilled]: (state, action) => {
      const { token, user } = action.payload;
      setSession(token);
      state.isAuthenticated = true;
      state.user = user;
    },
    [login.rejected]: (state) => {
      state.error = 'Incorrect credentials!';
    },
    [adminLogin.pending]: (state) => {
      state.error = null;
    },
    [adminLogin.fulfilled]: (state, action) => {
      const { token, user } = action.payload;
      setSession(token);
      state.isAuthenticated = true;
      state.user = user;
    },
    [adminLogin.rejected]: (state) => {
      state.error = 'Incorrect credentials!';
    },
    [register.pending]: (state) => {
      state.error = null;
    },
    [register.fulfilled]: (state, action) => {
      console.log(action.payload);
    },
    [register.rejected]: (state, action) => {
      state.error = 'Error Register!';
      console.log(action);
    }
  }
});

export const { initialise, logout } = authSlice.actions;

export default authSlice.reducer;
