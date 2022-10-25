import React from 'react';
import 'antd/dist/antd.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './pages/Login';
import Register from './pages/Register';
import Home from './pages/Home'
import Application from './pages/Application';
import Applications from './pages/Applications';
import { Toaster } from "react-hot-toast";
import { useSelector } from "react-redux"
import ProtectedRoute from './components/protectedRoutes';
import PublicRoute from './components/publicRoute';
function App() {
  const { loading } = useSelector((state) => state.alerts)
  return (
    <BrowserRouter>
      {loading && <div className="spinner-parent">
        <div className="spinner-border" role="status">

        </div>
      </div>
      }

      <Toaster position="top-center" reverseOrder={false} />
      <Routes>
        <Route path='/login' element={<PublicRoute><Login /></PublicRoute>} />

        <Route path='/register' element={<PublicRoute><Register /></PublicRoute>} />

        <Route path='/' element={<ProtectedRoute><Home/></ProtectedRoute>} />
        <Route path='/Application' element={<ProtectedRoute><Application/></ProtectedRoute>} />
        <Route path='/Applications' element={<ProtectedRoute><Applications/></ProtectedRoute>} />
 
      </Routes>
    </BrowserRouter>
  );
}

export default App;
