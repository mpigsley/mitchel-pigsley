import React from 'react';
import PropTypes from 'prop-types';

import './style.css';

const Article = props => <article className="Article">{props.children}</article>

Article.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Article;
