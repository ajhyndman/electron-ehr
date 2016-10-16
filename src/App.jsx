import React from 'react';
import ReactDOM from 'react-dom';

import MonacoEditor from 'components/MonacoEditor';


type Props = {};

type State = {
  content: string;
};

class App extends React.Component<void, Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      content: '',
    };
  }

  render() {
    return (
      <MonacoEditor
        value={this.state.content}
        language="javascript"
        onChange={(content: string) => this.setState(() => ({ content }))}
      />
    )
  }
}


ReactDOM.render(
  <App />,
  document.getElementById('app')
)
