import React from 'react';
import ReactDOM from 'react-dom';

const PLUGIN_ID = kintone.$PLUGIN_ID;

function Message({ message }) {
  return <p>{message}</p>;
}

kintone.events.on('app.record.index.show', function () {
  ReactDOM.render(
    <Message message={PLUGIN_ID} />,
    kintone.app.getHeaderSpaceElement()
  );
});
