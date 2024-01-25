import { createSlice } from "@reduxjs/toolkit";

const initialState = []; /**auth initial state */



const contactsSlice = createSlice({
    name: 'contacts',
    initialState,
    reducers: { /**allow to change state from anywhere reducers are functions*/
       setContacts : (state, action) => {
           state = action.payload;
       },
       addContacts : (state, action) => {
           state.push(action.payload);
       },
       deleteContacts: (state, action) => {
           state = state.filter(contact => contact.id !== action.payload.id);
       },
    },
});

export const {setContacts, addContacts, deleteContacts} = contactsSlice.actions;
export default contactsSlice.reducer;