import { configureStore } from '@reduxjs/toolkit';
import dataSlicers from './slicers/dataSlicers';
export const store = configureStore({
  reducer: {
    musicData: dataSlicers,
  },
});
