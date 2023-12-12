import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
const links = [
  { name: 'Log a Mood', to: '/logpage' },
  { name: 'Manage', to: '/Manage' },
];

function Navigation() {
  return (
<div className="mt-10 flex-1">
      <div className="grid grid-cols-1 gap-x-8 gap-y-6 text-base font-semibold leading-7 text-white sm:grid-cols-2 md:flex lg:gap-x-10">
        {links.map((link) => (
          <Link className='mx-auto hover:underline cursor-pointer' to={link.to} key={link.name}>
            {link.name} <span aria-hidden="true">&rarr;</span>
          </Link>
        ))}
      </div>
    </div>

  );
}

export default Navigation;
