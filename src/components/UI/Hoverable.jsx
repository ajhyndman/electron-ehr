import React from 'react';


class Hoverable extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      hot: false,
    };

    this.onMouseOver = this.onMouseOver.bind(this);
    this.onMouseOut = this.onMouseOut.bind(this);
  }

  onMouseOut() {
    this.setState({
      hot: false,
    });
  }

  onMouseOver() {
    this.setState({
      hot: true,
    });
  }

  render() {
    return (
      <span>
        {React.Children.map(this.props.children, child => (
          React.cloneElement(child, {
            style: {
              ...child.props.style,
              boxShadow: (this.state.hot
                ? '0 5px 11px 0 rgba(0,0,0,0.18),0 4px 15px 0 rgba(0,0,0,0.15)'
                : '0 2px 5px 0 rgba(0,0,0,0.16),0 2px 10px 0 rgba(0,0,0,0.12)'),
              transition: '0.3s all',
            },
            onMouseOut: this.onMouseOut,
            onMouseOver: this.onMouseOver,
          })
        ))}
      </span>
    );
  }

}

Hoverable.propTypes = {
  children: React.PropTypes.oneOfType([
    React.PropTypes.array,
    React.PropTypes.object,
    React.PropTypes.string,
  ]),
};


export default Hoverable;
