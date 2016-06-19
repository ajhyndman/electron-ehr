import React from 'react';

class RadioGroup extends React.Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    if (this.props.onChange) { this.props.onChange(event); }
  }

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

RadioGroup.propTypes = {
  children: React.PropTypes.oneOfType([
    React.PropTypes.array,
    React.PropTypes.object,
    React.PropTypes.string,
  ]),
  onChange: React.PropTypes.func.isRequired,
  value: React.PropTypes.any.isRequired,
};


export default RadioGroup;
