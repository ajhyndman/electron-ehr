// @flow
import React from 'react';
import lift from 'function-lift';

import formControl from 'styles/form-control';


// This function corresponds to 'unit' in functional-programming-speak
function getEventValue(event: any): string {
  return event.target.value;
}

type Props = {
  disabled?: boolean;
  label?: string;
  onChange: Function;
  type: string;
  value: string;
};

const defaultProps = {
  value: '',
};

class Input extends React.Component {
  static defaultProps: { value: string; };

  props: Props;

  focus(): void {
    setTimeout(
      // OMG, input focus is hard to manage in React.
      // https://github.com/facebook/react/issues/1791#issuecomment-204898317
      function whyTheHellIsThisFunctionNecessary(): void {
        this.refs.localInput.focus();
      }.bind(this),
      0
    );
  }

  render(): React.Element<any> {
    return (
      <label>
        <div style={formControl}>{this.props.label}</div>
        <div style={formControl}>
          <input
            ref="localInput"
            onChange={lift(
              getEventValue,
              function identity<T>(a: T): T { return a; },
              this.props.onChange
            )}
            style={{ boxSizing: 'border-box', width: '100%' }}
            type={this.props.type}
            value={this.props.value}
          />
        </div>
      </label>
    );
  }
}

Input.defaultProps = defaultProps;


export default Input;
