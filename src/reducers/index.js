import { combineReducers } from 'redux';
import credentials from './credentials';
import fetchedData from './fetchedData';
import searchResults from './searchResults';
import checkedOut from './checkedOut';
import requests from './requests';
import adminRequestList from './adminRequestList';
import adminUserSearchResults from './adminUserSearchResults';
import adminFetchedUserDetails from './adminFetchedUserDetails';
 
//exports all state managing functions
//configures state store
export default rootReducer = combineReducers({
	credentials: credentials,
	fetchedData: fetchedData,
	searchResults: searchResults,
	checkedOut: checkedOut,
	requests: requests,
	adminRequestList: adminRequestList,
	adminUserSearchResults: adminUserSearchResults,
	adminFetchedUserDetails: adminFetchedUserDetails
});