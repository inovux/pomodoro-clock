import React from 'react';

import styles from './Button.module.css';

type Props = {
  onClick?: (event: React.FormEvent<HTMLButtonElement>) => void;
  children: string;
};

const Button = ({ onClick, children }: Props) => (
  <button className={styles.container} onClick={onClick}>
    {children}
  </button>
);

export default Button;
