import { createSlice } from "@reduxjs/toolkit";
import { DarkModeStates } from "../../../type";

const initialState: DarkModeStates = {
    isDarkMode: false
}

export const darkModeSlice = createSlice({
    name: 'darkMode',
    initialState,
    reducers: {
        isDark: (state) => {
            state.isDarkMode = true
        }, 
        isLight: (state) => {
            state.isDarkMode = false;
        },
        isToggle: (state) => {            
            state.isDarkMode = !state.isDarkMode
        }
    }
})

export const { isDark, isLight, isToggle } = darkModeSlice.actions

export default darkModeSlice.reducer