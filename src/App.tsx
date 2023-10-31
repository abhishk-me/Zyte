import React from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { ConfigProvider } from 'antd';
import AppRoute from './app-routes';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/lib/integration/react';
import config from './store/config';

const { store, persistor } = config;

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <ConfigProvider
            theme={{
              token: {
                colorPrimary: '#4633d7',
                colorBorderSecondary: '#e5e5e5',
                colorFillQuaternary: "#f5f5f5",
                colorError: "#d53131"
              },
            }}
          >
            <AppRoute />
          </ConfigProvider>
        </PersistGate>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
