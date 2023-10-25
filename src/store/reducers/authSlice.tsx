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


interface LoginResponse {
    responseCode: 200 | 403,
    responseDescription: string,
    data: string | null,
}

interface login {
    username: string,
    password: string
}

const callLoginApi = (username: string, password: string): Promise<LoginResponse> => {
    return new Promise<LoginResponse>(function(resolve, reject){
        const user = {
            username: 'testuser',
            password: 'testpassword123'
        }
        setTimeout(() => {
            if (username === user.username && password === user.password){
                resolve({
                    responseCode: 200,
                    responseDescription: 'OK',
                    data: username,
                });
            } else {
                reject(({
                    responseCode: 403,
                    responseDescription: 'Invalid user',
                    data: null,
                }) as LoginResponse);
            }
        }, 1000);
    })
}

export const authLoginApi = createAsyncThunk<LoginResponse,login,{ rejectValue: LoginResponse }>(
    'auth/login',
    async ({username, password} : login, {rejectWithValue}) =>{
        try {
            const response = await callLoginApi(username, password)
            return (response) as LoginResponse
        } catch(err: any) {
            return rejectWithValue((err) as LoginResponse)
        }
    }
)

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {},
    extraReducers(builder){
        builder.addCase(authLoginApi.pending, (state: AuthState) => {
            state.isLoginPending = true
        })
        .addCase(authLoginApi.fulfilled, (state: AuthState, action) =>{
            state.isLoginPending = false
            state.isLoginSuccess = true
            state.user = action.payload
        })
        .addCase(authLoginApi.rejected, (state: AuthState, action) => {
            state.isLoginPending = false
            state.isLoginSuccess = false
            state.errorMessage = action.payload?.responseDescription
        })
    }
})

export default authSlice.reducer