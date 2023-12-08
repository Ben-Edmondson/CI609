// Manage.js or any other page component
import React from 'react';
import TakeMeHome from '../components/TakeMeHome';
import PageWrapper from '../components/PageWrapper';
import WeeklyCalendar from '../components/Calendar';

function Manage() {
    return (
        <div className="text-center w-full">
            <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">Mind: Mental Health Logger</h2>
            <WeeklyCalendar />
            <TakeMeHome />
        </div>
    );
}

export default PageWrapper(Manage);
