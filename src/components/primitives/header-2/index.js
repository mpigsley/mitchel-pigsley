import React from 'react';
import PropTypes from 'prop-types';

import './style.css';

const Header2 = props => <h1 className="Header2">{props.children}</h1>

Header2.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Header2;
