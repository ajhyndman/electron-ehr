// @flow
import React from 'react';


type Props = {
  children?: React.Element<any>;
  onChange: Function;
  value: any;
}

class RadioGroup extends React.Component {
  constructor(props: Props): void {
    super(props);

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange: (event: Event) => void;
  handleChange(event: Event): void {
    if (this.props.onChange) { this.props.onChange(event); }
  }

  props: Props;

  render(): React.Element<any> {
    return (
      <div>
        {React.Children.map(
          this.props.children,
          (child: React.Element<any>): React.Element<any> => (
            child.type.name === 'RadioButton'
              ? React.cloneElement(child, {
                checked: child.props.value === this.props.value,
                onChange: this.handleChange,
              })
              : child
          )
        )}
      </div>
    );
  }
}


export default RadioGroup;
