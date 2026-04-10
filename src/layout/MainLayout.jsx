import React from 'react';
import Navbar from '../Components/Shared/NavBar/Navbar';
import { Outlet } from 'react-router';

const mainlayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default mainlayout;