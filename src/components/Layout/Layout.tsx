import React from 'react';

import styles from './Layout.module.css';

type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => (
  <div className={styles.container}>{children}</div>
);

export default Layout;
