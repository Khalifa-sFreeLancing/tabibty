import { combineReducers } from '@reduxjs/toolkit';
import User from './auth';
import loadingSlice from './_loading';
const combinedReducer = combineReducers({
  _loading: loadingSlice.reducer,
  [User.slice.name]: User.slice.reducer,
});

export default combinedReducer;
