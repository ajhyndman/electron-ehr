// @flow
import React from 'react';

import './FoldingParagraph.css';
import ButtonUnstyled from 'components/UI/ButtonUnstyled';
import Add from 'components/icons/Add';
import Remove from 'components/icons/Remove';


type Props = {
  children?: React.Element<any>;
}

type State = {
  expanded: boolean;
}

class FoldingParagraph extends React.Component {
  constructor(props: Props): void {
    super(props);

    this.state = {
      expanded: true,
    };

    this.onToggle = this.onToggle.bind(this);
  }

  state: State;

  onToggle: () => void;
  onToggle(): void {
    this.setState((state: State): State => ({
      expanded: !state.expanded,
    }));
  }

  props: Props;

  render(): React.Element<any> {
    return (
      <section
        style={{
          position: 'relative',
        }}
      >
        <ButtonUnstyled
          className={`folding-paragraph__toggle ${this.state.expanded ? '' : 'collapsed'}`}
          onClick={this.onToggle}
          style={{
            cursor: 'pointer',
            left: '-18px',
            marginTop: '0.25em',
            position: 'absolute',
            top: 0,
          }}
        >
          {this.state.expanded
            ? <Remove
              fill="#777"
              style={{ border: '1px solid #CCC', display: 'block' }}
              width="9"
            />
            : <Add
              fill="#777"
              style={{ border: '1px solid #CCC', display: 'block' }}
              width="9"
            />
          }
        </ButtonUnstyled>
        <div
          style={{
            height: (this.state.expanded ? 'auto' : '1.33em'),
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            whiteSpace: (this.state.expanded ? 'inherit' : 'pre'),
            width: (this.state.expanded ? 'auto' : '66%'),
          }}
        >
          {this.props.children}
        </div>
      </section>
    );
  }
}


export default FoldingParagraph;
