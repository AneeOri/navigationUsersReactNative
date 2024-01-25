import { createSlice } from "@reduxjs/toolkit";

const initialState = []; /**auth initial state */



const contactsSlice = createSlice({
    name: 'contacts',
    initialState,
    reducers: { /**allow to change state from anywhere reducers are functions*/
       
    },
});

export const {} = contactsSlice.actions;
export default contactsSlice.reducer;