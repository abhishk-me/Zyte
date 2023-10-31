import React, { } from "react";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";


import { IState } from './store/config';
import { useSelector } from 'react-redux';
import Authenticate from './pages/auth/signin';
import { MainNavigation } from './pages/navigation';
import { Dashboard } from './pages/landing-pages';
import { PageEditor } from './pages/editor';
import { ConfigProvider, theme } from 'antd';

const AppRoute: React.FC = () => {
  const authenticated = useSelector((state: IState) => state.authReducer.authenticated);

  if (!authenticated) {
    return (
      <Routes>
        <Route
          path='signin'
          element={<Authenticate />}
        />
        <Route path='*' element={<Navigate to='signin' replace />} />
      </Routes>
    );
  }

  return (
    <>
      <Routes key="root">
        <Route path='/' element={< MainNavigation />}>
          <Route path='/' element={< Dashboard />} />
          <Route path='/analytics' element={< Dashboard />} />
        </Route>
        <Route
          path='edit-page/:id'
          element={
            <ConfigProvider
              theme={{
                algorithm: theme.darkAlgorithm,
                token: {
                  colorPrimary: "#666bff",
                  colorError: "#ff7979"
                }
              }}
            >
              <PageEditor />
            </ConfigProvider>}
        />
        <Route path='*' element={<Navigate to='/' replace />} />
      </Routes>
    </>

  )
};

export default AppRoute;

