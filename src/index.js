import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.css';
import "bootstrap/dist/js/bootstrap";
import { ConfigurationOptions } from 'aws-sdk'
import * as AWS from 'aws-sdk'


const configuration =(ConfigurationOptions) = {
  region: 'us-east-1',
  secretAccessKey: 'y43M6GPBKZNvQNbZek+W8szNgyma6yXrpk/UwyAx',
  accessKeyId: 'AKIARCGSI7XIF4MJAA5W'
}
AWS.config.update(configuration)

if (!AWS.config.region) {
  console.log('region not set');
  AWS.config.update({
    region: 'us-east-1'
  });
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
