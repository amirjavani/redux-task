import { createSlice } from "@reduxjs/toolkit";


interface theme{
  isDark: boolean;
}


const initialState:theme = {
  isDark: JSON.parse(localStorage.getItem("isDark") ?? "false")
};

const themeSlice = createSlice({
  name: "themeSlice",
  initialState: initialState,
  reducers: {
    toggleTheme:(state)=>{
      state.isDark = !state.isDark;
      localStorage.setItem('isDark', JSON.stringify(state.isDark))
      console.log(state.isDark)
    }
  },
});


export const {toggleTheme} = themeSlice.actions

export default themeSlice.reducer