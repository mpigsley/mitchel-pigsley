import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './style.css';

const Article = props => <article className={classNames('Article', props.className)}>{props.children}</article>

Article.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export default Article;
