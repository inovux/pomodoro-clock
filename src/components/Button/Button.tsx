import React, { FC, FormEvent } from 'react';

import styles from './Button.module.css';

type Props = {
  onClick?: (event: FormEvent<HTMLButtonElement>) => void;
  children: string;
};

const Button: FC<Props> = ({ onClick, children }) => (
  <button className={styles.container} onClick={onClick}>
    {children}
  </button>
);

export default Button;
