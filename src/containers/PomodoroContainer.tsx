import React, { useState } from 'react';

import Layout from '../components/Layout';
import TimeInput from '../components/TimeInput';

const PomodoroContainer = () => {
  const [sessionLength, setSessionLength] = useState(25);

  return (
    <Layout>
      <TimeInput
        onChange={value => setSessionLength(value)}
        value={sessionLength}
      />
    </Layout>
  );
};

export default PomodoroContainer;
