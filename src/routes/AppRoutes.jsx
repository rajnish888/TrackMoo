import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from '../layouts/MainLayout';
import Login from '../pages/Login/Login';
import Home from '../pages/Home/Home';
import NotFound from '../pages/NotFound';
import Signup from '../pages/Signup/Signup';
import Header from '../layouts/Header';


const AppRoutes = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route >
                        <Route index element={<MainLayout>  <Home /></MainLayout>} />
                        <Route path='/login' element={<MainLayout> <Login /> </MainLayout> } />
                        <Route path='/signup' element={<MainLayout><Signup /></MainLayout>} />
                        <Route path='*' element={<NotFound />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default AppRoutes