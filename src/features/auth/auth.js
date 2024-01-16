import { createSlice } from "@reduxjs/toolkit";

const initialState = { /**auth initial state */
  userToken : null,
  isLoading: true,
  isSignout: false,
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: { /**allow to change state from anywhere reducers are functions*/
        restoreToken: (state , action) => {
            state.userToken = action.payload;
            state.isLoading = false;
        },
        signIn : (state, action) => {
             state.isSignout = false;
             state.userToken = action.payload; /**action is sent from here */
        },
        signOut: (state) => {
            state.isSignout = true;
            state.userToken = null;
        },
    },
});

export const {restoreToken , signIn , signOut} = authSlice.actions;
export default authSlice.reducer;