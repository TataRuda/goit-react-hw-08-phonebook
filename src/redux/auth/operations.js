import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = 'https://young-ocean-87586-3686e0530b3d.herokuapp.com/';

const setAuthHeader = token => {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`; 
}

const clearAuthHeader = () => {
    axios.defaults.headers.common.Authorization = '';
};

export const registerUser = createAsyncThunk (
    'auth/register',
    async (credentials, thunkAPI) => {
        try {
            const response = await axios.post('/users/register', credentials);
            setAuthHeader(response.data.token);
            return response.data
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);

export const logInUser = createAsyncThunk(
    'auth/login',
    async (credentials, thunkAPI) => {
      try {
        const response = await axios.post('/api/users/login', credentials);
        
        setAuthHeader(response.data.token);
        return response.data;
      } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
      }
    }
  );

  export const logOutUser = createAsyncThunk(
    'authout',
    async (_, thunkAPI) => {
      try {
        await axios.post('/users/logout');
        
        clearAuthHeader();
      } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
      }
    }
  ); 

  export const refreshUser = createAsyncThunk(
    'auth/refresh',
    async (_, thunkAPI) => {
      // Reading the token from the state via getState()
      const state = thunkAPI.getState();
      const persistedToken = state.auth.token;
  
      if (persistedToken === null) {
        // If there is no token, exit without performing any request
        return thunkAPI.rejectWithValue('Unable to fetch user');
      }
  
      try {
        // If there is a token, add it to the HTTP header and perform the request
        setAuthHeader(persistedToken);
        const response = await axios.get('/users/current');
        return response.data;
      } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
      }
    }
  );
  
  


