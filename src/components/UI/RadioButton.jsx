import React from 'react';
import lift from 'function-lift';

import formControl from 'styles/form-control';



const getEventValue = (event) => event.target.value;

const active = 'rgb(51, 102, 255)';
const inactive = 'rgb(169, 169, 169)';

class RadioButton extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      hot: false,
    };

    this.onBlur = this.onBlur.bind(this);
    this.onFocus = this.onFocus.bind(this);
  }

  onBlur() { this.setState({ hot: false }) }

  onFocus() { this.setState({ hot: true }) }

  render() {
    return (
      <label>
        <div style={{
          // WebkitAppearance: 'textfield',
          ...formControl,
          border: `1px solid ${this.props.checked ? active : inactive}`,
          boxSizing: 'border-box',
          // lineHeight: 'normal',
          outline: (this.state.hot ? '-webkit-focus-ring-color auto 5px' : null),
          padding: '2px',
          position: 'relative',
          textAlign: 'center'
        }}>
          <div
            style={{
              border: `1px solid ${this.props.checked ? active : inactive}`,
              borderRadius: '50%',
              height: '0.875em',
              left: '1em',
              position: 'absolute',
              top: '50%',
              transform: 'translateY(-50%)',
              width: '0.875em',
            }}
          >
            {this.props.checked
              ? <div
                style={{
                  background: active,
                  borderRadius: '50%',
                  height: '0.5em',
                  width: '0.5em',
                  left: '50%',
                  position: 'absolute',
                  top: '50%',
                  transform: 'translate(-50%, -50%)',
                }}
              />
              : null}
          </div>
          <input
            checked={this.props.checked}
            onChange={lift(getEventValue, (a) => a, this.props.onChange)}
            onBlur={this.onBlur}
            onFocus={this.onFocus}
            style={{
              WebkitAppearance: 'none',
            }}
            type="radio"
            value={this.props.value}
          />
          {this.props.label}
        </div>
      </label>
    );
  }
}

RadioButton.propTypes = {
  checked: React.PropTypes.bool,
  label: React.PropTypes.string,
  onChange: React.PropTypes.func,
  value: React.PropTypes.any,
};


export default RadioButton;
