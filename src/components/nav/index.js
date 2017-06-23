import React from 'react';

import './style.css';

export default function Nav() {
  return (
    <header className="Header">
      <nav className="Header-Nav">
        <a className="Header-Link" href="/">Home</a>
        <a className="Header-Link" href="/#about">About</a>
        <a className="Header-Link" href="/#resume">Resume</a>
        <a className="Header-Link" href="/#logicalmitch">Logical Mitch</a>
        <a className="Header-Link" href="/services">Services</a>
      </nav>
    </header>
  );
}
