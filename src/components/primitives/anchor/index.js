import React from 'react';
import PropTypes from 'prop-types';

import './style.css';

const Anchor = props => <a {...props} className="Anchor">{props.children}</a>

Anchor.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Anchor;
