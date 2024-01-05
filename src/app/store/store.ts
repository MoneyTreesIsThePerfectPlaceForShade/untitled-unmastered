import {combineReducers, configureStore} from '@reduxjs/toolkit';

import exampleSlice from '@/entities/Example/exampleSlice';

const rootReducer = combineReducers({
  exampleSlice
});

export const store = configureStore({reducer: rootReducer});
