// DayPage.js
import React from 'react';
import DayData from '../components/DayData';
import TakeMeHome from '../components/TakeMeHome';
import Header from '../components/Header';
import PageWrapper from '../components/PageWrapper';

function DayPage() {
  const dayData = {
    date: '12/08/2023',
    day: 'Friday',
    mood: 'Excited',
    temperature: '25°C',
    humidity: '30%',
    airQuality: 'Fair',
    precipitation: '5%',
    message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec lacus sit amet nulla auctor feugiat. Nam egestas libero gravida augue vulputate scelerisque. Praesent tortor nisl, iaculis a libero at, iaculis scelerisque urna. Curabitur et faucibus neque. Duis faucibus quam eros, eget suscipit dolor mattis at. In mattis tempus ullamcorper. Sed suscipit nunc ac purus porta congue. Nulla sed mi semper, euismod nisi sit amet, sollicitudin libero. Mauris vulputate, eros dictum semper rhoncus, neque ante ultricies tellus, non ultrices ante sem quis ligula. Suspendisse tempor dolor eu tellus volutpat, a gravida tellus condimentum. Suspendisse gravida leo turpis, condimentum auctor purus ultrices vel. Nam vel tempor nisi. Sed sed quam congue, commodo nibh at, accumsan lectus. Curabitur posuere diam lectus, a feugiat dui porta quis. Nam in faucibus lacus. Aliquam erat volutpat.' // Example message
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900">
        <Header />
        <DayData {...dayData} />
        <TakeMeHome />
    </div>
  );
}

export default PageWrapper(DayPage);
