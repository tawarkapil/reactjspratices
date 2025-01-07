import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./slice/Counter/counterSlice";


const store = configureStore({
    reducer:{
        counter:counterReducer
    },
});

export default store;