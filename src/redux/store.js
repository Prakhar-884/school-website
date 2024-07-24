import { configureStore } from '@reduxjs/toolkit';
import schoolSlice from './slice';

const store = configureStore({
  reducer: {
    school: schoolSlice,
  },
});

export default store;
