import { createSlice } from "@reduxjs/toolkit";

const AuthSlice=createSlice({
    name:'user',
    initialState:{
        email:'',
        password:'',
        isAuthenticated:false,
    },
    reducers:{
        login:(state,action)=>{
            state.email=action.payload.email;
            state.password=action.payload.password;
            state.isAuthenticated=true;
        },
        logout:(state,action)=>{
            state.email='',
            state.password='',
            state.isAuthenticated=false;
        }
    }
})

export const {login,logout}=AuthSlice.actions;
export const selectUser=(state)=>state.user;
export default AuthSlice.reducer;

