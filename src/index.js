import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import registerServiceWorker from './registerServiceWorker';
import Router from './router/routes';

const app = document.getElementById('root');

ReactDOM.render(Router, app);

registerServiceWorker();
