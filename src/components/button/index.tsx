import React from 'react';

import { variantConfig } from '../todo-item/constants';
import styles from './styles.module.css';

type StyledButtonPropsType = {
  children: React.ReactNode;
  variant: 'default' | 'success' | 'error';
  onClick?: () => void;
};

const StyledButton: React.FC<StyledButtonPropsType> = ({
  children,
  variant = 'default',
  ...props
}) => {
  const { background } = variantConfig[variant];

  return (
    <button className={styles.button} style={{ background }} {...props}>
      {children}
    </button>
  );
};

export default StyledButton;
