import { createAsyncThunk } from '@reduxjs/toolkit';
import { API, tokenAuth } from 'API';
// import { toast } from 'react-toastify';

// export const signUp = createAsyncThunk('auth/register', async user => {
//   try {
//     const { data } = await API.post('auth/register', user);
//     return data;
//   } catch (error) {
//     if (error.response.status === 409) {
//       toast.error('Email in use!', {
//         theme: 'colored',
//       });
//     }
//   }
// });

// export const logIn = createAsyncThunk('auth/login', async user => {
//   try {
//     const { data } = await API.post('auth/login', user);
//     tokenAuth.set(data.token);
//     return data;
//   } catch (error) {
//     if (error.response.status === 401) {
//       toast.error('Server error, please try again later', {
//         theme: 'colored',
//       });
//     }
//     if (error.response.status !== 401) {
//       toast.error('Wrong email or password, please try again!', {
//         theme: 'colored',
//       });
//     }
//   }
// });

// export const logOut = createAsyncThunk('auth/logout', async () => {
//   try {
//     await API.post('auth/logout');
//     tokenAuth.unset();
//   } catch {
//     toast.error('Server error, please try again later', {
//       theme: 'colored',
//     });
//   }
// });

// export const userCurrent = createAsyncThunk('auth/current', async token => {
//   try {
//     tokenAuth(token);
//     const { data } = await API.get('auth/current');
//     return data;
//   } catch (error) {
//     tokenAuth();
//     toast.error('Oops, we got an error :(((( Dont worry and try again.', {
//       theme: 'colored',
//     });
//   }
// });

export const signUp = createAsyncThunk('auth/register', credentials => {
  return API.post('/auth/register', credentials)
    .then(() => {
      return API.post('/auth/login', credentials)
        .then(({ data }) => {
          tokenAuth.set(data.token);
          return data;
        })
        .catch(error => {
          console.log(error.response.data.message);
        });
    })
    .catch(error => {
      console.log(error.response.data.message);
    });
});

export const logIn = createAsyncThunk('auth/login', async credentials => {
  try {
    const { data } = await API.post('/auth/login', credentials);

    tokenAuth.set(data.token);
    return data;
  } catch (error) {
    console.log(error.response.data.message);
  }
});

export const logOut = createAsyncThunk('auth/logout', async () => {
  try {
    await API.post('/auth/logout');
    tokenAuth.unset();
  } catch (error) {
    console.log(error.response.data.message);
  }
});

export const userCurrent = createAsyncThunk(
  'auth/current',
  async (_, { getState, rejectWithValue }) => {
    const state = getState();
    const sid = state.auth.sid;

    if (!sid) {
      return rejectWithValue('error');
    }
    const refreshToken = state.auth.refreshToken;
    tokenAuth.set(refreshToken);
    try {
      const { data } = await API.post('/auth/refresh', { sid });
      tokenAuth.set(data.newAccessToken);
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);
