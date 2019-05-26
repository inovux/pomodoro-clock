import React from 'react';

import '../root.css';
import TimeInput from './TimeInput';
import Layout from './Layout';

const App = () => {
  return (
    <Layout>
      <TimeInput onChange={value => console.log(value)} value="5" />
    </Layout>
  );
};

export default App;
