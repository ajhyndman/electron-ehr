import React from 'react';


const Plus = (props) => (
  <svg
    fill="#000000"
    style={{
      display: 'block',
      lineHeight: '1em',
    }}
    viewBox="0 0 24 24"
    width="24"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" />
    <path d="M0 0h24v24H0z" fill="none" />
  </svg>
);


export default Plus;
