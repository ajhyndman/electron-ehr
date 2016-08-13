// @flow
import React from 'react';


type Props = {
  children?: React.Element<any>;
  onChange: Function;
  value: any;
}

class RadioGroup extends React.Component {
  constructor(props: Props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange: (event: Event) => void;
  handleChange(event: Event) {
    if (this.props.onChange) { this.props.onChange(event); }
  }

  props: Props;

  render() {
    return (
      <div>
        {React.Children.map(this.props.children, (child) => (
          child.type.name === 'RadioButton'
            ? React.cloneElement(child, {
              checked: child.props.value === this.props.value,
              onChange: this.handleChange,
            })
            : child
        ))}
      </div>
    );
  }
}


export default RadioGroup;
