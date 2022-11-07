import { BrowserRouter } from 'react-router-dom';
import React from 'react';
import { Provider } from 'react-redux';
import { store, persistor } from 'redux/store';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import './index.css';
import { PersistGate } from 'redux-persist/integration/react';
import { StrictMode } from 'react';
// import { ThemeProvider } from './components/Theme/ThemeContext';
// import Background from './components/Theme/Background';

ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          {/* <Background>
            <ThemeProvider> */}
          <App />
          {/* </ThemeProvider>
          </Background> */}
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </StrictMode>
);
