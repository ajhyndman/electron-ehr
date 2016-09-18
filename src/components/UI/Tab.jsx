// @flow
import React from 'react';

import 'css/no-select.css';
import styles from 'components/UI/Tab.css';
import Clear from 'components/icons/Clear';
import ButtonUnstyled from 'components/UI/ButtonUnstyled';


type Props = {
  id: number;
  isActive: boolean;
  name: string;
  onClick: Function;
  onRemove: Function;
};

type State = {
  hot: boolean;
};

// TODO: Clear default onClick
const defaultProps = {
  onClick: (): void => undefined,
};

class Tab extends React.Component {
  static defaultProps: {
    onClick: () => void;
  };

  constructor(props: Props): void {
    super(props);

    this.state = {
      hot: false,
    };

    this.onClick = this.onClick.bind(this);
    this.onMouseOut = this.onMouseOut.bind(this);
    this.onMouseOver = this.onMouseOver.bind(this);
    this.onRemove = this.onRemove.bind(this);
  }

  state: State;

  onClick: (event: Event) => void;
  onClick(event: Event): void {
    event.stopPropagation();
    this.props.onClick(this.props.id);
  }

  onMouseOut: () => void;
  onMouseOut(): void {
    this.setState({ hot: false });
  }

  onMouseOver: () => void;
  onMouseOver(): void {
    this.setState({ hot: true });
  }

  onRemove: (event: Event) => void;
  onRemove(event: Event): void {
    event.stopPropagation();
    this.props.onRemove(this.props.id);
  }

  render(): React.Element<any> {
    const color = (this.props.isActive ? '#FFF' : 'inherit');

    return (
      <button
        className={`no-select ${styles.base}`}
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
      </button>
    );
  }
}

Tab.defaultProps = defaultProps;


export default Tab;
