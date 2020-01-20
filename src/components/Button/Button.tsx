import React, { FC, MouseEvent } from 'react';

import styles from './Button.module.css';

interface IButtonProps {
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
  children: string;
}

const Button: FC<IButtonProps> = ({ onClick, children }) => (
  <button className={styles.container} onClick={onClick}>
    {children}
  </button>
);

export default Button;
