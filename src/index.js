import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router } from 'react-router-dom';
import { Amplify } from 'aws-amplify';
import { BootswatchSelect } from 'react-bootswatch-select';

import config from './config';
import { Provider } from 'react-redux'
import store from './store';
Amplify.configure({
  Auth: {
    mandatorySignIn: true,
    region: config.cognito.REGION,
    userPoolId: config.cognito.USER_POOL_ID,
    identityPoolId: config.cognito.IDENTITY_POOL_ID,
    userPoolWebClientId: config.cognito.APP_CLIENT_ID
  },
  Storage: {
    region: config.s3.REGION,
    bucket: config.s3.BUCKET,
    identityPoolId: config.cognito.IDENTITY_POOL_ID
  },
  API: {
    endpoints: [
      {
        name: "exam-service",
        endpoint: config.apiGateway.EXAMS_URL,
        region: config.apiGateway.REGION
      },
      {
        name: "question-service",
        endpoint: config.apiGateway.Questions_URL,
        region: config.apiGateway.REGION
      },
      {
        name: "result-service",
        endpoint: config.apiGateway.result_URL,
        region: config.apiGateway.REGION
      }
    ],

  }
});

export default function Index() {
  const [theme, setThem] = useState(localStorage.getItem('theme') ? localStorage.getItem('theme') : 'flatly')
  const setTheme = () => {
    if (theme === 'flatly') {
      setThem('darkly')
      localStorage.setItem('theme', 'darkly');
    } else {
      setThem('flatly')
      localStorage.setItem('theme', 'flatly');
    }
    window.location.reload();
  }
  return (
    <React.StrictMode>
      <Provider store={store}>
        <Router>
          <BootswatchSelect version={'4.4.1'} selectedThemeName={theme} selectorHidden />
          <App setTheme={setTheme} theme={theme} />
        </Router>
      </Provider >

    </React.StrictMode>
  )
}

ReactDOM.render(
  <Index />,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
