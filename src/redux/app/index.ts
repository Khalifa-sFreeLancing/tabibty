import { EntityKeys } from '../schema';
import { createSlice } from '@reduxjs/toolkit';
import thunks from './thunks';
import { RootState } from '../store';
import Toast from "react-native-toast-message";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { initialState } from './types';




const slice = createSlice({
  name: EntityKeys.APP,
  initialState: initialState,
  reducers: {
    logout: () => initialState,
    // changeIsSignedUp: (state, action) => { state.HomeData = action.payload },
  },
  extraReducers: builder => {
    //doSignIn
    builder.addCase(thunks.doGetHomeData.fulfilled, (state, action) => {
      state.HomeData = action.payload?.data
    });
    builder.addCase(thunks.doGetHomeData.rejected, (state, action: any) => {
      Toast.show({
        type: "error",
        text1: action.payload.data.message,
      })
    })
  }
})

const AppSlice = {
  thunks,
  slice,
  logout: slice.actions.logout,
  // changeIsSignedUp: slice.actions.changeIsSignedUp,
};

export const selectHomeData = (state: RootState) => state.app.HomeData;
export default AppSlice;
