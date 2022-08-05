import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface LoginResponse {
    accessToken: string;
    userId: string;
}

export interface AuthState {
    loginData: null | LoginResponse;
}

const initialAuthState: AuthState = {
    loginData: null,
};

const authSlice = createSlice({
    initialState: initialAuthState,
    name: "auth",
    reducers: {
        login: (state: AuthState, action: PayloadAction<LoginResponse>) => {
            state.loginData = action.payload;
        },
        logOut: (state: AuthState) => {
            state.loginData = null;
        },
    },
});

export const { login, logOut } = authSlice.actions;
export default authSlice.reducer;
