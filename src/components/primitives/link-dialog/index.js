import React from 'react';
import PropTypes from 'prop-types';

import './style.css';

const LinkDialog = (props) => {
  const newProps = Object.assign({}, props);
  delete newProps.linkText;
  return (
    <div>
      <a {...newProps} className="LinkDialog-Link">{props.linkText}</a>
      <div className="LinkDialog-Dialog">{props.children}</div>
    </div>
  );
};

LinkDialog.propTypes = {
  linkText: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export default LinkDialog;
