import {
    createSlice,
    createAsyncThunk,
} from '@reduxjs/toolkit';

export interface AuthState {
    isLoginPending: boolean,
    isLoginSuccess: boolean,
    errorMessage: string | undefined,
    user: any,
}

const initialState = {
    isLoginPending: false, 
    isLoginSuccess: false,
    errorMessage: '',
    user: {}
} as AuthState