import React from 'react';
import './App.css';
import { Button, Typography } from '@cheyer/npm-package-example';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Typography type='title'>This is the typography component with type title</Typography>
        <Typography type='body'>This is the typography component with type body</Typography>
        <Button label='See More' />
      </header>
    </div>
  );
}

export default App;
