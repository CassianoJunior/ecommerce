import React from 'react';

import { Icon } from '@chakra-ui/react';

import { AiOutlineShoppingCart } from 'react-icons/ai';
import styles from './badge.module.css';
import { useCartStateContext } from '../../contexts/CartContext';

type MyIconProps = {
  children: React.ReactNode;
};

const MyIcon: React.FC<MyIconProps> = ({ children }) => {
  const { total_items: totalItems } = useCartStateContext();
  const showBadge = totalItems > 0;

  return (
    <div className={styles.icon}>
      <Icon as={AiOutlineShoppingCart} color='highlight' w={8} h={8} />
      {showBadge ? children : ''}
    </div>
  );
};

export default MyIcon;
