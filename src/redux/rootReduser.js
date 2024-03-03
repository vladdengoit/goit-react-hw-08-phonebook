import { combineReducers } from 'redux'
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import contactsSlice from './contacts/contacts-slice'
import filterSlice from './filter/filter-slice'
import authSlice from './auth/auth-slice'

 const persistconfig = {
  key:"root",
  storage,
  whitelist: ["token"]
 }
 const authPersist = persistReducer(persistconfig, authSlice)

const rootReduser = combineReducers({
  auth: authPersist,
  contacts:contactsSlice,
  filter:filterSlice,
})
export default rootReduser
