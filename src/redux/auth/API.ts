import { api } from "../_axios";

const signIn = (data: any) => api.post('api/v1/auth/login', data);
const signUp = (data: any) => api.post('api/v1/auth/signup', data);
const verify = (data: any) => api.put('api/v1/auth/verify', data);
const resendVerify = (data: any) => api.post('api/v1/auth/verify/resend', data);
const forgetPassword = (data: any) => api.post('api/v1/auth/forget-password', data);
const resetPassword = (data: any) => api.put('api/v1/auth/reset-password', data);


const AuthAPI = {
  signIn,
  signUp,
  verify,
  resendVerify,
  forgetPassword,
  resetPassword
};

export default AuthAPI;
