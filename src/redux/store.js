import { configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { authReducer } from './auth/auth-slice';
import { testReducer } from './tests/tests-slice';

const persistAuth = {
  key: 'auth',
  storage,
  whitelist: ['token', 'isLogin', 'user'],
};

const persistTest = {
  key: 'test',
  storage,
  whitelist: ['testTech', 'testTheory', 'results'],
};

const store = configureStore({
  reducer: {
    auth: persistReducer(persistAuth, authReducer),
    test: persistReducer(persistTest, testReducer),
  },
  devTools: process.env.NODE_ENV === 'development',
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

let persistor = persistStore(store);
export { store, persistor };
