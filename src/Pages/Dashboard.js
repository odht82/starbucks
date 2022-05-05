import React from 'react';
import Sidebar from '../Components/Sidebar/Sidebar';
import MainSection from '../Components/MainSection/MainSection';

const Dashboard = () => {
    return (
        <div className="overflow-hidden w-full h-full flex items-start">
            {/* ===Sidebar Component in starting of row layout=== */}
            <Sidebar />
            {/* ===Main section(table) Component in ending of row layout=== */}
            <MainSection />
        </div>
    );
};

export default Dashboard;