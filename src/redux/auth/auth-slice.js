import { createSlice } from '@reduxjs/toolkit';
import {operationsAuth, operationsLogin, operationsCurrentUser, operationsLogOut} from './auth-operations';
import { pending ,rejected } from '../shared/redux-functions/functions';

const initialState = {
  user: {},
  token: "",
  isLogin: false,
   loading: false,
   error:"",
 };

const authSlice = createSlice({
  name: 'authInfo',
  initialState,
  extraReducers: builder =>{
    builder
    .addCase(operationsAuth.pending , pending)
    .addCase(operationsAuth.fulfilled, (state, { payload }) => {
      state.user = payload.user;
      state.token = payload.token;
      state.isLogin = true;
      state.loading = false;
      state.error = null;
      
    })
    .addCase(operationsAuth.rejected, rejected)

    .addCase(operationsLogin.pending , pending)
    .addCase(operationsLogin.fulfilled, (state, { payload }) => {
      state.user = payload.user;
      state.token = payload.token;
      state.isLogin = true;
      state.loading = false;
      state.error = null;
      
    })
    .addCase(operationsLogin.rejected, rejected)

    .addCase(operationsCurrentUser.pending, pending)
            .addCase(operationsCurrentUser.fulfilled, (state, {payload}) => {
               state.user = payload;
                // state.token = payload.token;
                state.isLogin = true;
                state.isLoading = false;
                state.error = null;
            })
            .addCase(operationsCurrentUser.rejected, (state) => {
                state.isLoading = false;
                state.token = "";
            })

            .addCase(operationsLogOut.pending, pending)
            .addCase(operationsLogOut.fulfilled, (state) => {
                state.user ={};
                state.token = "";
                state.isLogin = false;
                state.isLoading = false;
                   })
            .addCase(operationsLogOut.rejected, (state) => {
                state.isLoading = false;
                state.token = "";
            })
  }
})
export default authSlice.reducer