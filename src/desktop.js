import ReactDOM from 'react-dom';
import { PLUGIN_ID } from './settings/config';
import Message from './components/Message';

kintone.events.on('app.record.index.show', function () {
  ReactDOM.render(
    <Message message={PLUGIN_ID} />,
    kintone.app.getHeaderSpaceElement()
  );
});
