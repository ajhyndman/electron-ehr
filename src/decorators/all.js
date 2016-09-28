// @flow
import { CompositeDecorator, ContentBlock, Entity, SelectionState } from 'draft-js';
import MultiDecorator from 'draft-js-multidecorators';
import type { CharacterMetaData } from 'draft-js';

// import FoldingParagraph from 'components/UI/FoldingParagraph';
import { ToggleButton } from 'components/Connectors';
import ToggleGroup from 'components/UI/ToggleGroup';


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

function matchAllToggleGroups(contentBlock: ContentBlock, callback: Function): void {
  const text = contentBlock.getText();
  const GROUP_SELECTOR = /\{\{\{[^]*?\}\}\}/g;

  // This code is hideous!
  // (copied from https://facebook.github.io/draft-js/docs/advanced-topics-decorators.html#compositedecorator)
  let match;
  while ((match = GROUP_SELECTOR.exec(text)) !== null) {
    // Decorate the match;
    const matchedText = match[0];
    const start = match.index;
    const end = start + matchedText.length;
    callback(start, end);
  }
}

function matchInactiveToggleGroups(contentBlock: ContentBlock, callback: Function): void {
  const text = contentBlock.getText();
  const GROUP_SELECTOR = /\{\{\{[^]*?\}\}\}/g;

  // This code is hideous!
  // (copied from https://facebook.github.io/draft-js/docs/advanced-topics-decorators.html#compositedecorator)
  let match;
  while ((match = GROUP_SELECTOR.exec(text)) !== null) {
    const matchedText = match[0];
    const start = match.index;
    const end = start + matchedText.length;

    // Check for active, nested toggles.
    let hasActiveToggles = false;
    contentBlock.findEntityRanges(
      function predicate(character: CharacterMetaData): boolean {
        if (character.getEntity() === null) { return false; }
        const entity = Entity.get(character.getEntity());
        return (
          entity.getType() === 'TOGGLE'
          && entity.get('data').active
        );
      },
      function eachRange(entityStart, entityEnd) {
        if (entityStart >= start && entityEnd <= end) {
          hasActiveToggles = true;
        }
      }
    );

    // Decorate the match;
    if (!hasActiveToggles) {
      callback(start, end);
    }
  }
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

const renderToggleGroups = {
  strategy: matchInactiveToggleGroups,
  component: ToggleGroup,
};

// Composite
const compositeDecorator = new MultiDecorator([
  new CompositeDecorator([
    renderToggleGroups,
  ]),
  new CompositeDecorator([
    renderToggleButtons,
  ]),
]);


export default compositeDecorator;
