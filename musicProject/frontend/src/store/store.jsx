import {configureStore} from '@reduxjs/toolkit';
import musicReducer from "./reducers/musicSlice";
import userReducer from "./reducers/userSlice";
const store = configureStore({
    reducer:{
         music: musicReducer,
         user: userReducer
    }
});

export default store;