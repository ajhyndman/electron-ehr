import React from 'react';
import ReactDOM from 'react-dom';


const Hello = (props) => (
  <div>{`Hello ${props.name}`}</div>
);

Hello.propTypes = {
  name: React.PropTypes.string,
};

ReactDOM.render(
  <Hello name="Violet!" />,
  document.getElementById('app')
);
