import { configureStore } from "@reduxjs/toolkit";
import darkModeReducer from "./features/darkmode/darkModeSlice";

export const store = configureStore({
    reducer: {
        darkMode: darkModeReducer
    }
})

//Infer the `RootState` and `AppDispatch types from the store itself
export type RootState = ReturnType<typeof store.getState>;

//Inferred type: {posts: postStates, comments: commentsState, users: userState}
export type AppDispatch = typeof store.dispatch;