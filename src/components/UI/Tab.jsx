import React from 'react';

import './Tab.css';


class Tab extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      hot: false,
    };

    this.onMouseOver = this.onMouseOver.bind(this);
    this.onMouseOut = this.onMouseOut.bind(this);
  }

  onMouseOut() {
    this.setState({ hot: false });
  }

  onMouseOver() {
    this.setState({ hot: true });
  }

  render() {
    return (
      <div
        className="no-select"
        onClick={this.props.onClick.bind(null, this.props.id)}
        onMouseOut={this.onMouseOut}
        onMouseOver={this.onMouseOver}
        style={{
          background: (this.props.isActive
            ? '#2196F3'
            : this.state.hot
              ? 'rgba(0, 0, 0, 0.025)'
              : 'none'),
          color: (this.props.isActive ? '#FFF' : 'inherit'),
          cursor: 'pointer',
          lineHeight: '1.4em',
          padding: '0 1em',
          whiteSpace: 'nowrap',
        }}
      >
        {this.props.name}
      </div>
    );
  }
}

Tab.propTypes = {
  id: React.PropTypes.number.isRequired,
  isActive: React.PropTypes.bool.isRequired,
  key: React.PropTypes.number.isRequired,
  name: React.PropTypes.string.isRequired,
  onClick: React.PropTypes.func.isRequired,
};

// TODO: remove default onClick
Tab.defaultProps = {
  onClick: () => {},
};


export default Tab;
