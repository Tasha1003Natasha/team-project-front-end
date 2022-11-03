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

// const persistAuth = {
//   key: 'auth',
//   storage,
//   whitelist: ['token', 'user'],
// };

// const persistTest = {
//   key: 'test',
//   storage,
//   whitelist: ['testTech', 'testTheory', 'results'],
// };

const persistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

const persistedReducer = persistReducer(persistConfig, authReducer);

// const store = configureStore({
//   reducer: {
//     auth: persistReducer(persistAuth, authReducer),
//     test: persistReducer(persistTest, testReducer),
//   },

const store = configureStore({
  reducer: {
    auth: persistedReducer,
    test: testReducer,
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
