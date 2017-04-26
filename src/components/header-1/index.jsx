import React from 'react';
import PropTypes from 'prop-types';

import './style.css';

const Header1 = props => <h1 className="Header1">{props.children}</h1>

Header1.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Header1;
