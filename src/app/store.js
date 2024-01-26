/**aplication state */
import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/auth/auth';
import contactsReducer from '../features/auth/contacts/contacts'; /**puede terner cualquier nomnbre*/

export const store = configureStore({
  reducer: {
    auth: authReducer,
    contacts: contactsReducer,
  },
});