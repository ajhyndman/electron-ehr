import 'reset-css/reset.css';
import React from 'react';
import { action, storiesOf } from '@kadira/storybook';

import 'fonts/proxima-nova.css';
import FoldingParagraph from 'components/UI/FoldingParagraph';


storiesOf('Folding Paragraph', module)
  .add('with text', () => (
    <div>
      <div
        className="margin"
        style={{
          bottom: 0,
          left: 0,
          position: 'absolute',
          right: 0,
          top: 0,
        }}
      />
      <div
        style={{
          fontFamily: 'Proxima Nova',
          lineHeight: '1.33em',
          boxSizing: 'border-box',
          height: '200px',
          padding: '0.5em 0.5em 0.5em 2em',
        }}
      >
        <FoldingParagraph onToggle={action('Toggle Paragraph')}>
          We discussed spinal cord stimulators for long term palliation of back pain and reviewed restrictions with this technology including incompatibility with MRIs and pace-makers. I reviewed with the patient information specifically dealing with the new technology, 10,000 hertz high frequency spinal cord stimulation, for coverage of back and leg pain, FDA supported efficacy, requirements, and opportunity to undergo the procedure at our facility. I reviewed with the patient the difference between this technology compared to the old system with data from European and American studies that support these assertions. We reviewed specifics regarding current availability with Nevro Systems in hospital market.I reviewed requirements for consideration of spinal cord stimulator trial including psychiatric evaluation and explained rationale for the same.
        </FoldingParagraph>
      </div>
    </div>
  ));
