// @flow
import React from 'react';


type Props = {
  children?: React.Element<any>;
};

type State = {
  hot: boolean;
};

class Hoverable extends React.Component {
  constructor(props: Props): void {
    super(props);

    this.state = { hot: false };

    this.onMouseOver = this.onMouseOver.bind(this);
    this.onMouseOut = this.onMouseOut.bind(this);
  }

  state: State;

  shouldComponentUpdate(nextProps: Props, nextState: State): boolean {
    return (
      nextProps.children !== this.props.children
      || nextState.hot !== this.state.hot
    );
  }

  onMouseOut: () => void;
  onMouseOut(): void {
    this.setState({ hot: false });
  }

  onMouseOver: () => void;
  onMouseOver(): void {
    this.setState({ hot: true });
  }

  props: Props;

  render(): React.Element<any> {
    return (
      <span>
        {React.Children.map(
          this.props.children,
          (child: React.Element<any>): React.Element<any> => (
            React.cloneElement(child, {
              style: {
                ...child.props.style,
                boxShadow: (this.state.hot
                  ? '0 2px 4px 0 rgba(0,0,0,0.18),0 2px 4px 0 rgba(0,0,0,0.15)'
                  : ''),
                transition: '0.3s all',
              },
              onMouseOut: this.onMouseOut,
              onMouseOver: this.onMouseOver,
            })
          )
        )}
      </span>
    );
  }

}


export default Hoverable;
