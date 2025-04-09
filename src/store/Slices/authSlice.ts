import { createSlice } from "@reduxjs/toolkit";


interface token{
  token: string | null;
}


const initialState:token = {
    token: localStorage.getItem("token")?JSON.parse(localStorage.getItem("token")??''):null
};

const authSlice = createSlice({
  name: "authSlice",
  initialState: initialState,
  reducers: {
    logout:(state)=>{
        state.token =''
        localStorage.removeItem('token')
    }
  },
});


export const {logout} = authSlice.actions

export default authSlice.reducer