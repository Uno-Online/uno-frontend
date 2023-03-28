import { ReactNode } from 'react';

import ArrowUp from '@/assets/arrows/arrow_up.svg';
import ArrowDown from '@/assets/arrows/arrow_down.svg';

import styles from './spinner-card.module.css';

type SpinnerCarProps = {
  children: ReactNode;
  flow?: 'clockwise' | 'anti-clockwise';
  rotate: boolean;
};

export function SpinnerCard({
  children,
  flow = 'anti-clockwise',
  rotate,
}: SpinnerCarProps) {
  const rotateFrom = styles[flow];

  return (
    <div className={styles.container}>
      <div className={rotate ? rotateFrom : ''}>
        <img src={ArrowDown} alt='Arrow Down' />
        <img src={ArrowUp} alt='Arrow UP' />
      </div>
      <div>{children}</div>
    </div>
  );
}
