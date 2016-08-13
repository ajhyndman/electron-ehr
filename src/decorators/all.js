// @flow
import { CompositeDecorator, Entity } from 'draft-js';

import FoldingParagraph from 'components/UI/FoldingParagraph';
import { ToggleField } from 'components/Connectors';


// Strategies
function matchAllBlocks(contentBlock, callback) {
  const text = contentBlock.getText();
  callback(0, text.length);
}

function matchToggleFields(contentBlock, callback) {
  function filter(selection) {
    const entityKey = selection.getEntity();
    if (entityKey) {
      return Entity.get(entityKey).getType() === 'TOGGLE';
    }
    return false;
  }
  contentBlock.findEntityRanges(filter, callback);
}

// Decorators
const foldAllBlocks = {
  strategy: matchAllBlocks,
  component: FoldingParagraph,
};

const renderToggleFields = {
  strategy: matchToggleFields,
  component: ToggleField,
};

// Composite
const compositeDecorator = new CompositeDecorator([
  // foldAllBlocks,
  renderToggleFields,
]);


export default compositeDecorator;
