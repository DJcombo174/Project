import React from 'react';
import './App.css';
import {Helmet} from 'react-helmet';
import HeaderArea from './HeaderArea/HeaderArea';

function App() {
  return (
    <div className="App">
      <Helmet>
        <title>WePen</title>
        <link rel="icon" href="/images/logo.png" type="”image/ico”"/>
      </Helmet>
      <HeaderArea/>
    </div>
  );
}

export default App;
