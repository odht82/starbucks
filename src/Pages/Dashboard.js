import React from 'react';
import Sidebar from '../Components/Sidebar/Sidebar';
import MainSection from '../Components/MainSection/MainSection';

const Dashboard = () => {
    return (
        <div className="overflow-hidden w-full h-full flex items-start">
            <Sidebar />
            <MainSection />
        </div>
    );
};

export default Dashboard;