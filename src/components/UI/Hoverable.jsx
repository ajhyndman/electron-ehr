// @flow
import React from 'react';


export type HoverInterface = {
  hot: boolean;
  onMouseOut: () => void;
  onMouseOver: () => void;
};

type Props = {
  children?: React.Element<HoverInterface>;
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
    this.setState(() => ({ hot: false }));
  }

  onMouseOver: () => void;
  onMouseOver(): void {
    this.setState(() => ({ hot: true }));
  }

  props: Props;

  render(): React.Element<any> {
    return (
      <span>
        {React.Children.map(
          this.props.children,
          (child) => (
            React.cloneElement(child, {
              active: true,
              hot: this.state.hot,
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
