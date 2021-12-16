import React from 'react';
import styles from './badge.module.css';
import MyIcon from './MyIcon';

interface IBadgeComponentPros {
  quantity: number;
}

const IconWithBadge: React.FC<IBadgeComponentPros> = ({ quantity }) => (
  <MyIcon>
    <span className={styles.badge}>{quantity}</span>
  </MyIcon>
);

export default IconWithBadge;
