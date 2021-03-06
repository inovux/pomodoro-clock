import React, { FC, ReactNode } from 'react'

import styles from './Layout.module.css'

interface Props {
  children: ReactNode
}

const Layout: FC<Props> = ({ children }) => (
  <div className={styles.container}>{children}</div>
)

export default Layout
