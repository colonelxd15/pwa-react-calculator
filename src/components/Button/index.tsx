import React, { ReactElement, ReactNode } from 'react';
import clsx from 'clsx';
import styles from './style.module.scss';

interface IProps {
  value: number|string;
  children: ReactNode;
  className?: string;
};

export default function Button(props: IProps):ReactElement {
  const { value, children, className } = props;
  const btnAdditionalClassName = className ? styles[className] : '';

  return (
    <button className={clsx(styles.btn, btnAdditionalClassName)}>
      {children}
    </button>
  );
};
