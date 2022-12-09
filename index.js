import React from 'react';
import PropTypes from 'prop-types';
import { render } from 'react-dom';
import './style.css';

function App({ name }) {
  return (
    <div id="main">
      <h3>Hello, {name}</h3>
    </div>
  );
}

App.defaultProps = {
  name: 'Aravind',
};

App.propTypes = {
  name: PropTypes.string,
};

render(<App name={'1'} />, document.getElementById('root'));
