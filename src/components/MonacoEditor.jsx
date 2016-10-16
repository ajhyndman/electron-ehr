import * as React from 'react';
import { css, StyleSheet } from 'aphrodite';


type Props = {
  value: string;
  language: string;
  onChange: (newValue: string) => any;
}

const styles = StyleSheet.create({
  base: {
    height: '100%',
  },
});

class MonacoEditor extends React.Component<void, Props, {}> {
  editor: monaco.editor.IStandaloneCodeEditor;

  componentDidMount() {
    // Monaco requires the AMD module loader to be present on the page. It is not yet
    // compatible with ES6 imports. Once that happens, we can get rid of this.
    // See https://github.com/Microsoft/monaco-editor/issues/18
    (window['require'])(['vs/editor/editor.main'], () => {
      this.editor = monaco.editor.create(this.refs['editor']: HTMLDivElement, {
        value: this.props.value,
        language: this.props.language,
        lineNumbers: true,
      });

      this.editor.onDidChangeModelContent(event => {
        this.props.onChange(this.editor.getValue());
      });
    });
  }

  componentDidUpdate(prevProps: Props) {
    if (prevProps.value !== this.props.value && this.editor) {
      this.editor.setValue(this.props.value);
    }

    if (prevProps.language !== this.props.language) {
      throw new Error('<MonacoEditor> language cannot be changed.');
    }
  }

  render() {
    return <div className={css(styles.base)} ref='editor'></div>;
  }
}


export default MonacoEditor;
