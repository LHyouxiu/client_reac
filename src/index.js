import React from 'react';
import ReactDOM from 'react-dom';
import { Button } from 'antd';

ReactDOM.render(
  <div className="App">
    <Button type="primary">Primary</Button>
    <Button>Default</Button>
  </div>,
  document.getElementById('root')
);

