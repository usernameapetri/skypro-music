import { configureStore } from '@reduxjs/toolkit';
import dataSlicers from './slicers/dataSlicers';
import { trackApi } from '../services/track';

export const store = configureStore({
  reducer: {
    [trackApi.reducerPath]: trackApi.reducer,
    musicData: dataSlicers,
  },
  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware(),
    trackApi.middleware,
  ],
});
