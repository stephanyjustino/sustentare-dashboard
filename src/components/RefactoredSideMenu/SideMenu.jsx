import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './SideMenu.module.css';

export default function RefactoredSideMenu({ iconHome, iconEmployees, exit }) {
  return (
    <div className={styles.SideMenu}>
      <div className={styles.group}>
        <FontAwesomeIcon icon={iconHome} className={styles.icon} />
        <FontAwesomeIcon icon={iconEmployees} className={styles.icon} />
      </div>
      <FontAwesomeIcon icon={exit} className={styles.icon} />
    </div>
  );
}
