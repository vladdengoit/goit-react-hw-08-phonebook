import { createAsyncThunk } from "@reduxjs/toolkit";
import {fetchForAuth, fetchForLogin, currentUser, fetchForLogOut} from '../../api/auth-api';

export const operationsAuth = createAsyncThunk(
  "auth/fetchAuth",
  async(body ,{rejectWithValue})=>{
    try {
      const data = await fetchForAuth(body);
      return data;
    }
     catch (error) {
      return rejectWithValue(error.response.data.message)
    }
  }
  
)

export const operationsLogin = createAsyncThunk(
  "auth/fetchLogin",
  async(body ,{rejectWithValue})=>{
    try {
      const data = await fetchForLogin(body);
      return data;
    }
     catch (error) {
      return rejectWithValue(error.response.data.message)
    }
  }
  
)

export const operationsCurrentUser = createAsyncThunk(
  "auth/currentuser",
 
  async(_,{rejectWithValue, getState})=>{
     try {
      const{auth}= getState();
      const data = await currentUser(auth.token);
      return data      
    } catch (error) {
      
    }
   },
   {condition:(_, {getState})=>{
    const {auth}= getState();
    if (!auth.token) {
      return false;      
    }
   }}
  
)

export const operationsLogOut = createAsyncThunk(
  "auth/fetchLogOut",
  async(_,{rejectWithValue})=>{
    try {
      const data = await fetchForLogOut();
      return data;
    }
     catch (error) {
      return rejectWithValue(error.response.data.message)
    }
  }
  
)