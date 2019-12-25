import React from 'react';
import { connect } from 'react-redux';

import Layout from '../components/Layout';
import TimeInput from '../components/TimeInput';
import { decreaseMinuteLength, increaseMinuteLength } from '../actions';
import { ApplicationState } from '../reducers';

interface Props {
  increaseMinuteLength: typeof increaseMinuteLength;
  decreaseMinuteLength: typeof decreaseMinuteLength;
  timeLength: number;
}

const PomodoroContainer = ({
  increaseMinuteLength,
  decreaseMinuteLength,
  timeLength,
}: Props) => {
  return (
    <Layout>
      <TimeInput
        onChange={value => console.log(value)}
        value={timeLength}
        onIncrementTime={increaseMinuteLength}
        onDecrementTime={decreaseMinuteLength}
      />
      test
    </Layout>
  );
};

const mapStateToProps = ({ timeSettings }: ApplicationState) => ({
  timeLength: timeSettings.timeLength,
});

const mapDispatchToProps = {
  increaseMinuteLength,
  decreaseMinuteLength,
};

export default connect(mapStateToProps, mapDispatchToProps)(PomodoroContainer);
