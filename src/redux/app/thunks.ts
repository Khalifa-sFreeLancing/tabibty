import AppAPI from './API';
import { createAsyncThunk } from '@reduxjs/toolkit';

const doGetHomeData: any = createAsyncThunk<any, any, any>(
  'auth/login',
  async (_: any, thunkApi: any) => {
    try {
      const response = await AppAPI.home();
      // console.log(JSON.stringify(response.data))
      if (
        response.status == 400 ||
        response.status == 401 ||
        response.status == 422 ||
        response.status == 404 ||
        response.status == 403 ||
        response.status == 500 ||
        response.status == 409 ||
        response.status == 503
      ) {
        throw response;
      }
      return response.data
    } catch (error) {
      return thunkApi.rejectWithValue(error)
    }
  }
)

const AppThunks = {
  doGetHomeData
};

export default AppThunks;
