import { CompositeDecorator } from 'draft-js';

import FoldingParagraph from 'components/UI/FoldingParagraph';

// Strategies
function allBlocks(contentBlock, decorateRange) {
  const text = contentBlock.getText();
  decorateRange(0, text.length);
}

// Decorators
const foldAllBlocks = {
  strategy: allBlocks,
  component: FoldingParagraph,
};

// Composite
const compositeDecorator = new CompositeDecorator([
  foldAllBlocks,
]);


export default compositeDecorator;
