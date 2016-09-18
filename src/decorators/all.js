// @flow
import { CompositeDecorator, ContentBlock, Entity, SelectionState } from 'draft-js';

// import FoldingParagraph from 'components/UI/FoldingParagraph';
import { ToggleButton } from 'components/Connectors';


// Strategies
// function matchAllBlocks(contentBlock, callback) {
//   const text = contentBlock.getText();
//   callback(0, text.length);
// }

function matchToggleButtons(contentBlock: ContentBlock, callback: Function): void {
  function filter(selection: SelectionState): boolean {
    const entityKey = selection.getEntity();
    if (entityKey) {
      return Entity.get(entityKey).getType() === 'TOGGLE';
    }
    return false;
  }
  contentBlock.findEntityRanges(filter, callback);
}

// Decorators
// const foldAllBlocks = {
//   strategy: matchAllBlocks,
//   component: FoldingParagraph,
// };

const renderToggleButtons = {
  strategy: matchToggleButtons,
  component: ToggleButton,
};

// Composite
const compositeDecorator = new CompositeDecorator([
  // foldAllBlocks,
  renderToggleButtons,
]);


export default compositeDecorator;
