import React from 'react';

import 'css/no-select.css';
import Clear from 'components/icons/Clear';
import ButtonUnstyled from 'components/UI/ButtonUnstyled';


class Tab extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      hot: false,
    };

    this.onClick = this.onClick.bind(this);
    this.onMouseOut = this.onMouseOut.bind(this);
    this.onMouseOver = this.onMouseOver.bind(this);
    this.onRemove = this.onRemove.bind(this);
  }

  onClick(event) {
    event.stopPropagation();
    this.props.onClick(this.props.id);
  }

  onMouseOut() {
    this.setState({ hot: false });
  }

  onMouseOver() {
    this.setState({ hot: true });
  }

  onRemove(event) {
    event.stopPropagation();
    this.props.onRemove(this.props.id);
  }

  render() {
    const color = (this.props.isActive ? '#FFF' : 'inherit');

    return (
      <div
        className="no-select"
        onClick={this.onClick}
        onMouseOut={this.onMouseOut}
        onMouseOver={this.onMouseOver}
        style={{
          background: (this.props.isActive
            ? '#2196F3'
            : this.state.hot
              ? 'rgba(0, 0, 0, 0.025)'
              : 'none'),
          color,
          cursor: 'pointer',
          fontSize: '0.875em',
          fontWeight: '300',
          lineHeight: `${5 / 3}em`,
          overflow: 'hidden',
          padding: '0 1em 0 1.5em',
          position: 'relative',
          whiteSpace: 'nowrap',
        }}
      >
        <ButtonUnstyled onClick={this.onRemove}>
          <Clear
            fill={color}
            width="12"
            style={{
              display: (this.state.hot ? 'block' : 'none'),
              left: '0.375em',
              position: 'absolute',
              top: '50%',
              transform: 'translateY(-50%)',
            }}
          />
        </ButtonUnstyled>
        {this.props.name}
      </div>
    );
  }
}

Tab.propTypes = {
  id: React.PropTypes.number.isRequired,
  isActive: React.PropTypes.bool.isRequired,
  name: React.PropTypes.string.isRequired,
  onClick: React.PropTypes.func.isRequired,
  onRemove: React.PropTypes.func.isRequired,
};

// TODO: Clear default onClick
Tab.defaultProps = {
  onClick: () => {},
};


export default Tab;
