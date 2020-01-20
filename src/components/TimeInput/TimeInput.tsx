import classNames from 'classnames'
import React, { FC, useState } from 'react'

import Button from '../Button'
import styles from './TimeInput.module.css'

interface Props {
  onChange: (value: number) => void
  onDecrementTime: () => void
  onIncrementTime: () => void
  value: number
}

const TimeInput: FC<Props> = ({
  onChange,
  value,
  onIncrementTime,
  onDecrementTime,
}) => {
  const [isEditable, setIsEditable] = useState(false)

  const onChangeInput = (e: React.FormEvent<HTMLInputElement>) => {
    const re = /^[0-9\b]+$/

    if (e.currentTarget.value === '' || re.test(e.currentTarget.value)) {
      onChange(+e.currentTarget.value)
    }
  }

  const handleDecrementTime = (inputValue: number) => {
    if (inputValue <= 0) {
      return
    }

    onDecrementTime()
  }

  return (
    <div className={styles.container}>
      <Button
        onClick={() => {
          handleDecrementTime(value)
        }}
      >
        {'<<'}
      </Button>
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
  )
}

export default TimeInput
