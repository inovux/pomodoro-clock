import React from 'react';
import '../root.css';
import TimeInput from './TimeInput';

const App: React.FC = () => {
  return <TimeInput onChange={value => console.log(value)} value="5" />;
};

export default App;
