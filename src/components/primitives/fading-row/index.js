import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './style.css';

const FadingRow = props => (
  <hr
    className={classNames('FadingRow', {
      'FadingRow-TopMargin': props.topMargin,
    })}
  />
);

FadingRow.propTypes = {
  topMargin: PropTypes.bool,
};

export default FadingRow;
