// @flow
import React from 'react';
import UUID from 'uuid-js';
import lift from 'function-lift';

import formControl from 'styles/form-control';


const getEventValue = (event: any): ?string => event.target.value;

const active = 'rgb(51, 102, 255)';
const inactive = 'rgb(169, 169, 169)';

type Props = {
  checked?: boolean;
  label?: string;
  onChange?: Function;
  value?: any;
};

type State = {
  hot: boolean;
};

class RadioButton extends React.Component {
  constructor(props: Props): void {
    super(props);

    this.id = UUID.create();

    this.state = {
      hot: false,
    };

    this.onBlur = this.onBlur.bind(this);
    this.onFocus = this.onFocus.bind(this);
  }

  state: State;

  onBlur: () => void;
  onBlur(): void { this.setState({ hot: false }); }

  onFocus: () => void;
  onFocus(): void { this.setState({ hot: true }); }

  id: string;
  props: Props;

  render(): React.Element<any> {
    return (
      <label htmlFor={this.id}>
        <div
          style={{
            // WebkitAppearance: 'textfield',
            ...formControl,
            border: `1px solid ${this.props.checked ? active : inactive}`,
            boxSizing: 'border-box',
            // lineHeight: 'normal',
            outline: (this.state.hot ? '-webkit-focus-ring-color auto 5px' : null),
            padding: '2px',
            position: 'relative',
            textAlign: 'center',
          }}
        >
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
            id={this.id}
            onChange={lift(
              getEventValue,
              function identity<T>(a: T): T { return a; },
              this.props.onChange
            )}
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


export default RadioButton;
