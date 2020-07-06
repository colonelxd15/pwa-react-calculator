import React, { ReactElement, ReactNode } from 'react';
import { btn } from './style.module.scss';

interface IProps {
  value: number|string;
  children: ReactNode;
};

export default function Button(props: IProps):ReactElement {
  const { value, children } = props;

  return (
    <button className={btn}>
      {children}
    </button>
  );
}