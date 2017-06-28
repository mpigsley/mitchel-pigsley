import React from 'react';
import FontAwesome from 'react-fontawesome';

import './style.css';

export default function Footer() {
  return (
    <footer className="Footer">
      <a href="https://www.youtube.com/user/mpigsley77" target="_blank" rel="noopener noreferrer" aria-label="youtube">
        <FontAwesome className="Footer-Icon" name='youtube' size='3x' fixedWidth />
      </a>
      <a href="https://www.facebook.com/mpigsley" target="_blank" rel="noopener noreferrer" aria-label="facebook">
        <FontAwesome className="Footer-Icon" name='facebook' size='3x' fixedWidth />
      </a>
      <a href="https://twitter.com/mitchsp" target="_blank" rel="noopener noreferrer" aria-label="twitter">
        <FontAwesome className="Footer-Icon" name='twitter' size='3x' fixedWidth />
      </a>
      <a href="mailto:mpigsley@gmail.com" target="_top" aria-label="send email">
        <FontAwesome className="Footer-Icon" name='envelope' size='3x' fixedWidth />
      </a>
      <a href="https://plus.google.com/+MitchelPigsley" target="_blank" rel="noopener noreferrer" aria-label="google plus">
        <FontAwesome className="Footer-Icon" name='google-plus' size='3x' fixedWidth />
      </a>
      <a href="https://www.linkedin.com/pub/mitchel-pigsley/52/332/473" target="_blank" rel="noopener noreferrer" aria-label="linked in">
        <FontAwesome className="Footer-Icon" name='linkedin' size='3x' fixedWidth />
      </a>
      <a href="https://github.com/mpigsley" target="_blank" rel="noopener noreferrer" aria-label="github">
        <FontAwesome className="Footer-Icon" name='github' size='3x' fixedWidth />
      </a>
      <a href="https://soundcloud.com/mitchsp" target="_blank" rel="noopener noreferrer" aria-label="soundcloud">
        <FontAwesome className="Footer-Icon" name='soundcloud' size='3x' fixedWidth />
      </a>
    </footer>
  );
}