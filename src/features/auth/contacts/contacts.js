import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    {id:0, name:'konta esperanto'},
    {id:1, name:'karoline luka'},
    {id:2, name:'karlo vica'},
]; /**auth initial state */



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
           //state = state.filter(contact => contact.id !== action.payload.id);
           const index = state.findIndex(i => i.id === action.payload);
           state.splice(index, 1);
       },
    },
});

export const {setContacts, addContacts, deleteContacts} = contactsSlice.actions;
export default contactsSlice.reducer;