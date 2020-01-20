import React, { FC, MouseEvent } from 'react'

import styles from './Button.module.css'

interface IButtonProps {
  children: string
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void
}

const Button: FC<IButtonProps> = ({ onClick, children }) => (
  <button className={styles.container} onClick={onClick}>
    {children}
  </button>
)

export default Button
