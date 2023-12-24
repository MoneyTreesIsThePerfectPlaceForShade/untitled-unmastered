import {combineReducers, configureStore} from '@reduxjs/toolkit';

import exampleSlice from '@/entities/Example/exampleSlice';

const rootReducer = combineReducers({
  example: exampleSlice
});

export const store = configureStore({reducer: rootReducer});
