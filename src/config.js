import ReactDOM from 'react-dom';
import { PLUGIN_ID } from './settings/config';
import Message from './components/Message';

ReactDOM.render(
  <Message message={PLUGIN_ID} />,
  document.getElementById('config-root')
);
