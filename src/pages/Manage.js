// Manage.js or any other page component
import React from 'react';
import TakeMeHome from '../components/TakeMeHome';
import PageWrapper from '../components/PageWrapper';
import WeeklyCalendar from '../components/Calendar';
import Header from '../components/Header';

function Manage() {
    return (
        <div className="text-center w-full">
            <Header />
            <WeeklyCalendar />
            <TakeMeHome />
        </div>
    );
}

export default PageWrapper(Manage);
