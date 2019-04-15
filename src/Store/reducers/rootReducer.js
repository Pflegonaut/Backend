// import authReducer from './authReducer';
import questionsReducer from './questionsReducer';
import authReducer from './authReducer';
import { combineReducers } from 'redux';
import { firestoreReducer } from 'redux-firestore';
import { firebaseReducer } from 'react-redux-firebase';

const rootReducer = combineReducers({
    // authReducer: authReducer,
    auth: authReducer,
    questionsReducer: questionsReducer,
    firebase: firebaseReducer,
    firestore: firestoreReducer
});

export default rootReducer;