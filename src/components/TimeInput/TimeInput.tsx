import React, { useState } from 'react';
import classNames from 'classnames';

import styles from './TimeInput.module.css';
import Button from '../Button';

type Props = {
  onChange: (value: number) => void;
  value: number;
};

const TimeInput = ({ onChange, value }: Props) => {
  const [isEditable, setIsEditable] = useState(false);

  const onChangeInput = (e: React.FormEvent<HTMLInputElement>) => {
    const re = /^[0-9\b]+$/;

    if (e.currentTarget.value === '' || re.test(e.currentTarget.value)) {
      onChange(+e.currentTarget.value);
    }
  };

  const onIncrementTime = () => {
    onChange(value + 1);
  };

  const onDecrementTime = () => {
    onChange(value - 1);
  };

  return (
    <div className={styles.container}>
      <Button onClick={() => onDecrementTime()}>{'<<'}</Button>
      {isEditable ? (
        <input
          className={classNames(styles.timeInput, styles.time)}
          type="text"
          onChange={onChangeInput}
          value={value}
          autoFocus
          onBlur={() => setIsEditable(false)}
        />
      ) : (
        <span className={styles.time} onClick={() => setIsEditable(true)}>
          {value}
        </span>
      )}
      <Button onClick={() => onIncrementTime()}>{'>>'}</Button>
    </div>
  );
};

export default TimeInput;
