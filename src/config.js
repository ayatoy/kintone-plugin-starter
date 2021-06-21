import React from 'react';
import ReactDOM from 'react-dom';

const PLUGIN_ID = kintone.$PLUGIN_ID;

function Message({ message }) {
  return <p>{message}</p>;
}

ReactDOM.render(
  <Message message={PLUGIN_ID} />,
  document.getElementById('config-root')
);
